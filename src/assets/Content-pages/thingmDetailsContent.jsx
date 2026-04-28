import { InfoBox } from "../Detail-Page-Assets/Info-Box/infoBox";
import { LoadTable } from "../../assets/Table/LoadGeneralMalTable";
import { TableHead } from "../../assets/Table/Head/tableHead";
import { LoadTableRows } from "../../assets/Table/Body/loadGeneralTableRows";
import { CurrMalContext } from "../../pages/MalDetails";
import { useSortThingmenn } from "../Helpers/Sorting/useSortThingmenn";
import { TableRow } from "../Table/Body/tableRow";
import { useContext, useState } from "react";
import { CurrThingmContext } from "../../pages/ThingmennDetails";
import { InfoBoxThingmenn } from "../Thingmenn-Details-assets/infoBoxThingmenn";
import { AdvSearchSection } from "../Advanced-Search/advSearchSection";

export function ThingmDetailsContent({ arrThingmenn }) {
  const { currThingm, setCurrThingm } = useContext(CurrThingmContext);

  const [filter, setFilter] = useState({
    cat: `Öll mál`,
    date: `any`,
    name: ``,
  });

  const [sorting, setSorting] = useState({ sorting: "date", direction: false });

  const processedArrThingmenn = useSortThingmenn({ arrThingmenn }, sorting);

  return (
    <section id="thingmadur-valinn">
      <InfoBoxThingmenn thingmadur={currThingm} />

      <div id="malaskra-searchbar" class="container">
        <h3 id="malaskra-searchbar-text">Leita í málaskrá</h3>
        <input
          type="text"
          id="search-malaskra-input"
          placeholder="Leita að máli"
        />
        <input
          type="button"
          id="search-malaskra-button"
          class="button"
          value="Leita"
        />
      </div>
      <AdvSearchSection setFilter={setFilter} />
      <div class="table-wrap">
        <div id="vote-explenation-wrap">
          <p class="vote-explenation">
            *Greiddi ekki atkv = Þingmaður ýtti á takkann "Greiðir ekki atkvæði"
          </p>
          <p class="vote-explenation">
            *Fjarvist = Þingmaður tilkynnti fjarveru sína t.d. vegna veikinda
            eða erindargjörða á vegum Alþingis
          </p>
          <p class="vote-explenation">
            *Fjarverandi = Þingmaður ýtti ekki á takka og boðaði ekki fjarvist
          </p>
        </div>
        <table>
          <thead>
            <tr class="table-descriptions">
              <th>
                <div id="dags-container" class="dags-container">
                  <h2 id="label-dags">Dagsetning</h2>
                  <div class="filter-arrow arrow-up"></div>
                </div>
              </th>
              <th id="mal-container-top" colspan="2">
                <h2>Mál</h2>
              </th>
              <th class="vote-description">Já</th>
              <th class="vote-description">Nei</th>
              <th class="vote-description">*Greiddi ekki atkvæði</th>
              <th class="vote-description">*Fjarvist</th>
              <th class="vote-description">*Fjarverandi</th>
              <th class="vote-description">Niðurstaða</th>
            </tr>
          </thead>
          <tbody class="mal-container">
            <tr class="mal odd">
              <th class="mal-date">01.01.2000</th>
              <th class="mal-heading">Mál 1</th>
              <th class="mal-heading">
                <a href="thingmenn-profile.jpg" target="_blank">
                  Nánar
                </a>
              </th>
              <td>
                <div class="vote já"></div>
              </td>
              <td>
                <div class="vote nei"></div>
              </td>
              <td>
                <div class="vote greiðir-ekki-atkvæði"></div>
              </td>
              <td>
                <div class="vote boðaði-fjarvist"></div>
              </td>
              <td>
                <div class="vote fjarverandi"></div>
              </td>
            </tr>
            <tr class="mal even">
              <th class="mal-date">01.01.2000</th>
              <th class="mal-heading">Mál 2</th>
              <th class="mal-heading">
                <a href="thingmenn-profile.jpg" target="_blank">
                  Nánar
                </a>
              </th>
              <td>
                <div class="vote já"></div>
              </td>
              <td>
                <div class="vote nei"></div>
              </td>
              <td>
                <div class="vote greiðir-ekki-atkvæði"></div>
              </td>
              <td>
                <div class="vote boðaði-fjarvist"></div>
              </td>
              <td>
                <div class="vote fjarverandi"></div>
              </td>
            </tr>
            <tr class="mal odd">
              <th class="mal-date">01.01.2000</th>
              <th class="mal-heading">Mál 3</th>
              <th class="mal-heading">
                <a href="thingmenn-profile.jpg" target="_blank">
                  Nánar
                </a>
              </th>
              <td>
                <div class="vote já"></div>
              </td>
              <td>
                <div class="vote nei"></div>
              </td>
              <td>
                <div class="vote greiðir-ekki-atkvæði"></div>
              </td>
              <td>
                <div class="vote boðaði-fjarvist"></div>
              </td>
              <td>
                <div class="vote fjarverandi"></div>
              </td>
            </tr>
            <tr class="total">
              <th>Total</th>
              <td>
                <span>X</span>
              </td>
              <td>
                <span>X</span>
              </td>
              <td>
                <span>X</span>
              </td>
              <td>
                <span>X</span>
              </td>
              <td>
                <span>X</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}
