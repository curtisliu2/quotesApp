import React, {useEffect, useState} from "react";

type resultProps = {
    content: string;
    author: string;
};

const SearchBar = () => {
    const [randomResult, setRandomResult] = useState<resultProps | null>(null);
    const [header, setHeader] = useState("defaultHeader");
    const [searchBar, setSearchBar] = useState("defaultSearchBar");
    const [searchInput, setSearchInput] = useState("");
    const [searchResults, setSearchResults] = useState("hidden");

    useEffect(() => {
        const randomAPI = async () => {
            const data = await fetch("https://usu-quotes-mimic.vercel.app/api/random", {
                method: "GET"
            });
            const jsonData = await data.json();
            setRandomResult(jsonData);
        };

        randomAPI();
    }, []);

    const handleKeyDown = (event: { key: string }) => {
        if (event.key === 'Enter') {
            setHeader("searchedHeader");
            setSearchBar("searchedSearchBar");
            setSearchResults("searchResults");
            mainAPI();

            let randomQuote = document.getElementById("randomQuote");
            if (randomQuote != null) {
                randomQuote.remove();
            }

            let currSearch = document.getElementById("currentSearch");
            if (currSearch != null) {
                currSearch.remove();
            }

            let searchResults = document.getElementById("searchResults");
            if (searchResults != null) {
            }
        }
    }

    const [result, setResult] = useState<resultProps[]>([]);
    const [] = useState("hidden");
        let query = `https://usu-quotes-mimic.vercel.app/api/search?query=${searchInput}`;

        const mainAPI = async () => {
            const data = await fetch(query, {
                method: "GET"
            });
            const jsonData = await data.json();
            setResult(jsonData.results);
        };


    return (
        <>  <header className={header}>Quote Search</header>
            <input className={searchBar} type="text" onKeyDown={handleKeyDown} onChange={(e) => setSearchInput(e.target.value)} placeholder="Albert Einstein"/>
            <div id="searchResults">
                <div className="randomQuote" id="randomQuote">{randomResult?.content} - {randomResult?.author}</div>
                <div>
                    {result.map((value) => {
                        return (
                            <div className={searchResults}>
                                <div>{value.content} - {value.author}</div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    )
}

export default SearchBar;