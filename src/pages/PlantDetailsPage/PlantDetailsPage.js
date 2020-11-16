import React from "react";
import config from "../../config";
import TokenService from "../../services/tokenService.js";
import xss from "xss";

import "./PlantDetailsPage.css";

import TabBar from "../../components/TabBar/TabBar.js";
import ModalImage from "../../components/ModalImage/ModalImage.js";

/* Provides images and data about a specific plant from the Trefle API.

As the Trefle API is being updated with new data still, it's better to fetch on every load than
to cache the data on our own server. */
export default class PlantDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      details: {},
      images: [],
      plant: {},
      raw_data: false,
      loading: true,
      modal_src: null,
      modal_alt: null,
      main_species: {},
      main_species_images: {},
    };
  }

  componentDidMount = () => {
    const trefle_id = this.props.router.match.params.plant_id;

    fetch(`${config.API_ENDPOINT}/plant/${trefle_id}`, {
      headers: {
        "api-key": config.API_KEY,
      },
    })
      .then((res) =>
        !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
      )
      .then((data) => {
        const details = {
          scientific_name: data.scientific_name,
          common_name:
            data.common_name.charAt(0).toUpperCase() +
            data.common_name.slice(1),
          plant_class: data.class ? data.class.name : null,
          plant_order: data.order ? data.order.name : null,
          family: data.family ? data.family.name : null,
          family_common_name: data.family_common_name,
          genus: data.genus.name,
          duration: data.duration,
          shade_tolerance: data.main_species.growth.shade_tolerance,
          drought_tolerance: data.main_species.growth.drought_tolerance,
          flower_color: data.main_species.flower.color,
        };

        this.setState({
          details,
          images: [data.image_url],
          plant: data,
          complete_data: data.main_species.complete_data,
          loading: false,
          main_species: data.main_species,
          main_species_images: data.main_species.images,
        });
      })
      .catch((res) => this.setState({ error: res.error }));
  };

  labelize(str) {
    // Uppercase the first char of every word
    return str
      .split("_")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  }

  handleAddPlant = () => {
    // Add a plant to the user's collection
    const {
      scientific_name,
      common_name,
      plant_class,
      plant_order,
      family,
      family_common_name,
      genus,
      duration,
      shade_tolerance,
      drought_tolerance,
      flower_color,
    } = this.state.details; // Destructure the variables the server needs off of state

    const plantToAdd = {
      trefle_id: this.props.router.match.params.plant_id,
      image: this.state.images[0].url,
      scientific_name,
      common_name,
      plant_class,
      plant_order,
      family,
      family_common_name,
      genus,
      duration,
      shade_tolerance,
      drought_tolerance,
      flower_color,
    };

    return fetch(`${config.API_ENDPOINT}/garden`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "api-key": config.API_KEY,
        Authorization: `Bearer ${TokenService.getToken()}`,
      },
      body: JSON.stringify(plantToAdd),
    })
      .then((res) =>
        !res.ok
          ? res.json().then((e) => Promise.reject(e))
          : this.props.router.history.push("/collection")
      )
      .catch((res) => console.log(res.error));
  };

  recurseDataIntoLists(data) {
    // For displaying raw data, recursively create <ul> and <li> elements
    let listItems = "";

    for (let el in data) {
      if (typeof data[el] === "object") {
        listItems += `<li>${el}: ${this.recurseDataIntoLists(data[el])}</li>`;
      } else {
        listItems += `<li>${el}: ${data[el]}</li>`;
      }
    }

    return `<ul>${listItems}</ul>`;
  }

  toggleRawData = () => {
    return this.setState({ raw_data: !this.state.raw_data });
  };

  render() {
    return (
      <div className="plant-details">
        {this.state.modal_src && (
          <ModalImage
            src={this.state.modal_src}
            alt={this.state.alt}
            exitModal={() => {
              this.setState({ modal_src: null, modal_alt: null });
            }}
          ></ModalImage>
        )}
        <TabBar></TabBar>
        {!this.state.error && this.state.loading && (
          <h3 className="plant-details__loading">Fetching your plant...</h3>
        )}

        <div className="plant-details__innerdiv">
          <div className="plant-details__images">
            {/* Old, non-programmatic image display */}
            {/* {this.state.images &&
              this.state.images.map((image, idx) => (
                <img
                  key={idx}
                  className='plant-details__img'
                  src={image}
                  alt={`${this.state.details.scientific_name}`}
                  onClick={() => {
                    this.setState({
                      modal_src: image,
                      modal_alt: this.state.details.scientific_name,
                    });
                  }}
                />
              ))} */}

            {Object.entries(this.state.main_species_images).map(
              (imageEntry) => {
                if (imageEntry[1].length > 0) {
                  return (
                    <div>
                      <h3>{this.labelize(imageEntry[0])}</h3>

                      {imageEntry[1] &&
                        imageEntry[1].map((image, idx) => (
                          <img
                            key={idx}
                            className="plant-details__img"
                            src={image.image_url}
                            alt={`${this.state.details.scientific_name}`}
                            title={image.copyright}
                            onClick={() => {
                              this.setState({
                                modal_src: image.image_url,
                                modal_alt: this.state.details.scientific_name,
                              });
                            }}
                          />
                        ))}
                    </div>
                  );
                }
              }
            )}
          </div>
          <div className="plant-details__details">
            {/* Old, non-programmatic way I was displaying details */}
            {/* {Object.entries(this.state.details).map((detail, idx) =>
              detail[1] ? (
                <div className='detail' key={idx}>
                  <p className='detail__label'>{this.labelize(detail[0])}</p>
                  <p className='detail__content'>{detail[1]}</p>
                </div>
              ) : null
            )} */}

            {!this.state.loading && (
              <button className="btn" onClick={this.handleAddPlant}>
                Add to My Collection
              </button>
            )}

            {Object.entries(this.state.main_species).map((detail, idx) => {
              const dontDisplay = [
                "id",
                "slug",
                "status",
                "rank",
                "genus_id",
                "image_url",
                "year",
                "bibliography",
                "author",
              ];
              if (dontDisplay.includes(detail[0])) return null;

              if (detail[1] && typeof detail[1] !== "object") {
                return (
                  <div className="detail" key={idx}>
                    <p className="detail__label">{this.labelize(detail[0])}</p>
                    <p className="detail__content">{detail[1]}</p>
                  </div>
                );
              } else {
                return null;
              }
            })}
          </div>
        </div>
        {!this.state.loading && (
          <button
            className="btn plant-details__raw-data-button"
            onClick={this.toggleRawData}
          >
            View Raw Data
          </button>
        )}
        {this.state.raw_data && (
          <div className="plant-details__raw-data">
            <a
              download={`${this.state.plant.scientific_name
                .toLowerCase()
                .replace(" ", "_")}.json`}
              href={`data:text/json;charset=utf-8,${encodeURIComponent(
                JSON.stringify(this.state.plant)
              )}`}
            >
              Download as JSON
            </a>
            {/* Using dangerouslySetInnerHTML potentially exposes us if the Trefle API is compromised,
                            so we're using the xss package to escape any dangerous tags from the code */}
            <div
              dangerouslySetInnerHTML={{
                __html: xss(this.recurseDataIntoLists(this.state.plant)),
              }}
            ></div>
          </div>
        )}
      </div>
    );
  }
}
