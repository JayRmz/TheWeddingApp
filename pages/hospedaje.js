import ContainerBlock from "../components/ContainerBlock";
import Title from "../components/UI/Title";
import Description from "../components/UI/Descrption";
import Image from "next/image";

export default function Hospedaje() {
  return (
    <ContainerBlock>
      <Title title="Hospedaje" />
      <Description text="Te recomendamos lugares para hospedarte cerca del salón." />
      <div className="grid grid-cols-1 lg:grid-cols-2 m-5">
        <div>
          <Image
            src={"/img/chn.jpeg"}
            layout="responsive"
            width={250}
            height={400}
            alt="CHN"
          />
        </div>

        <div className="bg-pink-txt text-center text-xl md:text-2xl lg:text-5xl py-10 px-5">
          <Description text="Si no te convence... Nos dimos a la tarea de facilitarte otras búsquedas de hospedaje." />
          <div className="p-10">
            <Description text="Airbnb?" />
            <a
              target="_blank"
              className="underline m-10 justify-self-center text-black"
              rel="noopener noreferrer"
              href="https://www.airbnb.mx/s/Apodaca--Nuevo-Le%C3%B3n/homes?tab_id=home_tab&refinement_paths%5B%5D=%2Fhomes&flexible_trip_lengths%5B%5D=one_week&price_filter_input_type=0&date_picker_type=calendar&checkin=2022-11-18&checkout=2022-11-20&query=Apodaca%2C%20N.L.%2C%20M%C3%A9xico&place_id=ChIJRX6YMS_vYoYR1Lg9kQNoM38&source=structured_search_input_header&search_type=autocomplete_click"
            >
              Aquí encuentras
            </a>
          </div>

          <div className="p-10">
            <Description text="Mejor otro hotel?" />
            <a
              target="_blank"
              className="underline m-10 text-black"
              rel="noopener noreferrer"
              href="https://www.booking.com/searchresults.es.html?aid=376374&label=bdot-iJlimrWb2ikbMovUFMkVjAS267754636793%3Apl%3Ata%3Ap1%3Ap22.563.000%3Aac%3Aap%3Aneg%3Afi%3Atikwd-501657630872%3Alp9050740%3Ali%3Adec%3Adm%3Appccp%3DUmFuZG9tSVYkc2RlIyh9YcUSe6BbHz0Ad_yDShFFSHQ&lang=es&sid=f63c1eba87945cd61d6afe368f0401cf&sb=1&sb_lp=1&src=index&src_elem=sb&error_url=https%3A%2F%2Fwww.booking.com%2Findex.es.html%3Faid%3D376374%26label%3Dbdot-iJlimrWb2ikbMovUFMkVjAS267754636793%253Apl%253Ata%253Ap1%253Ap22.563.000%253Aac%253Aap%253Aneg%253Afi%253Atikwd-501657630872%253Alp9050740%253Ali%253Adec%253Adm%253Appccp%253DUmFuZG9tSVYkc2RlIyh9YcUSe6BbHz0Ad_yDShFFSHQ%26sid%3Df63c1eba87945cd61d6afe368f0401cf%26sb_price_type%3Dtotal%26%26&ss=Apodaca%2C+Monterrey%2C+Nuevo+Le%C3%B3n%2C+M%C3%A9xico&is_ski_area=&checkin_year=2022&checkin_month=11&checkin_monthday=18&checkout_year=2022&checkout_month=11&checkout_monthday=20&efdco=1&group_adults=2&group_children=0&no_rooms=1&map=1&b_h4u_keep_filters=&from_sf=1&ss_raw=apodaca&ac_position=0&ac_langcode=es&ac_click_type=b&dest_id=3327&dest_type=district&place_id_lat=25.793335&place_id_lon=-100.187965&search_pageview_id=48cf2cefe1b10230&search_selected=true&search_pageview_id=48cf2cefe1b10230&ac_suggestion_list_length=5&ac_suggestion_theme_list_length=0#map_opened"
            >
              Opciones en Booking.com
            </a>
          </div>
        </div>
      </div>
    </ContainerBlock>
  );
}
