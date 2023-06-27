function updateSearchResultsVisibility() {
    const searchResultsDiv = document.getElementById("search-results");

    // If there are no child elements, hide the div
    if (searchResultsDiv.children.length === 0) {
        searchResultsDiv.style.display = "none";
        searchResultsDiv.className = "";
    } else {
        // Otherwise, show the div
        searchResultsDiv.style.display = "block";
        searchResultsDiv.className = "border";
    }
}
