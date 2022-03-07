import { connect } from "react-redux";
import { compose } from "redux";

import Loader from "../hoc/loader/Loader";
import SearchResultsPage from "../pages/search-results-page/SearchResultsPage";

const mapStateToProps = (state) => ({
  isLoading: state.search.isFetching,
});

const SearchResultsPageContainer = compose(
  connect(mapStateToProps),
  Loader
)(SearchResultsPage);

export default SearchResultsPageContainer;
