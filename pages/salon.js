import ContainerBlock from "../components/ContainerBlock";
import CustomMap from "../components/CustomMap";

export default function Salon() {
  return (
    <ContainerBlock>
      <div>Salón </div>
      Av. Miguel Aleman km 26, Las Cruces, 66615 Cd Apodaca, N.L.
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.airbnb.mx/s/Apodaca--Nuevo-Le%C3%B3n/homes?tab_id=home_tab&refinement_paths%5B%5D=%2Fhomes&flexible_trip_lengths%5B%5D=one_week&price_filter_input_type=0&date_picker_type=calendar&checkin=2022-11-18&checkout=2022-11-20&query=Apodaca%2C%20N.L.%2C%20M%C3%A9xico&place_id=ChIJRX6YMS_vYoYR1Lg9kQNoM38&source=structured_search_input_header&search_type=autocomplete_click"
      >
        Airbnb
      </a>
      <CustomMap />
    </ContainerBlock>
  );
}
