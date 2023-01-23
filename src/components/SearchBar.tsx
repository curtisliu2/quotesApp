import React, {useEffect, useState} from "react";


type resultProps = {
    content: string;
    author: string;
};

const SearchBar = () => {
    const [randomResult, setRandomResult] = useState<resultProps[]>([]);
    const [header, setHeader] = useState("defaultHeader");
    const [searchBar, setSearchBar] = useState("defaultSearchBar");
    // const [result, setResult] = useState<resultProps[]>([]);

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
    useEffect(() => {
        let query = "https://usu-quotes-mimic.vercel.app/api/search?query=" + "Thomas Jefferson";
        const mainAPI = async () => {
            const data = await fetch(query, {
                method: "GET"
            });
            const jsonData = await data.json();
            setResult(jsonData.results);
        };

        mainAPI();
    }, []);


    return (
        <>  <header className={header}>Quote Search</header>
                <input className={searchBar} type="text" onKeyDown={handleKeyDown} placeholder="Albert Einstein"/>
            <div id="searchResults">
                <div className="randomQuote" id="randomQuote">{randomResult.content} - {randomResult.author}</div>
                <div>
                    {result.map((value) => {
                        return (
                            <div className="hidden">
                                <div>{value.content}</div>
                                <div>{value.author}</div>
                            </div>
                        );
                    })}
                </div>

            </div>
        </>
    )
}

export default SearchBar;