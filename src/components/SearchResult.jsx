import styles from "../components/SearchResult.module.css";
import Meaning from "./Meaning";
const SearchResult = (props) => {
  if (props.definition) {
    return (
      <>
        <div className="searchResult--container">
          <section>
            <h1>{props.definition.word}</h1>
          </section>

          {props.definition.meanings.map(function (meaning, index) {
            return (
              <section key={index}>
                <Meaning meaning={meaning} />
              </section>
            );
          })}
        </div>
      </>
    );
  } else {
    return null;
  }
};
export default SearchResult;
