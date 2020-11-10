// Search Filter Component...!

import React, { useState } from "react";

const SearchFilter = () => {

    // Handeling state here...!
    const [search, setSearch] = useState('');

    // Function to search data...!
    const searchData = () => {
        let searchValue = search;
        let tableClone = document.getElementById("table");
        let trClone = tableClone.getElementsByTagName("tr");

        for (let i = 1; i < trClone.length; i++) {
            let searchRollNum = trClone[i].getElementsByTagName("th")[1];

            if (searchRollNum) {
                let textValue = searchRollNum.innerHTML;

                if (textValue.indexOf(searchValue) > -1) {
                    trClone[i].style.display = "";
                }

                else {
                    trClone[i].style.display = "none";
                }
            }
        }
    }

    return (
        <div>
            <h1> Search Filter App in React JS </h1>
            <hr />
            <div>
                <input
                    type="number"
                    autoFocus
                    placeholder="Search Roll Num"
                    value={search}
                    onChange={(event) => { setSearch(event.target.value) }}
                    onKeyUp={searchData}
                />
            </div>

            {/* Data Area */}
            <table border="1" id="table" style={{ width: "100%" }}>
                <tr>
                    <th> Name </th>
                    <th> Roll Number </th>
                    <th> Total Marks </th>
                    <th> Marks Obtained </th>
                    <th> Percentage </th>
                    <th> Grade </th>
                </tr>
                <tr>
                    <th> Ahmed </th>
                    <th> 8251 </th>
                    <th> 850 </th>
                    <th> 760 </th>
                    <th> 89% </th>
                    <th> A+1 </th>
                </tr>
                <tr>
                    <th> Kashan </th>
                    <th> 8252 </th>
                    <th> 850 </th>
                    <th> 705 </th>
                    <th> 82% </th>
                    <th> A+1 </th>
                </tr>
                <tr>
                    <th> Shahzaib </th>
                    <th> 8253 </th>
                    <th> 850 </th>
                    <th> 495 </th>
                    <th> 85% </th>
                    <th> C </th>
                </tr>
                <tr>
                    <th> Mehran </th>
                    <th> 8254 </th>
                    <th> 850 </th>
                    <th> 610 </th>
                    <th> 71% </th>
                    <th> A </th>
                </tr>
                <tr>
                    <th> Khurram </th>
                    <th> 8255 </th>
                    <th> 850 </th>
                    <th> 415 </th>
                    <th> 48% </th>
                    <th> D </th>
                </tr>
                <tr>
                    <th> Arsalan Qadri </th>
                    <th> 8256 </th>
                    <th> 850 </th>
                    <th> 290 </th>
                    <th> 34% </th>
                    <th> E </th>
                </tr>
                <tr>
                    <th> Anees </th>
                    <th> 8257 </th>
                    <th> 850 </th>
                    <th> 560 </th>
                    <th> 65% </th>
                    <th> B </th>
                </tr>
                <tr>
                    <th> Arsalan Popa </th>
                    <th> 8258 </th>
                    <th> 850 </th>
                    <th> 678 </th>
                    <th> 79% </th>
                    <th> A </th>
                </tr>
                <tr>
                    <th> Tanweer </th>
                    <th> 8259 </th>
                    <th> 850 </th>
                    <th> 260 </th>
                    <th> 30% </th>
                    <th> F </th>
                </tr>
                <tr>
                    <th> Zeeshan </th>
                    <th> 8260 </th>
                    <th> 850 </th>
                    <th> 590 </th>
                    <th> 69% </th>
                    <th> B </th>
                </tr>
            </table>
        </div>
    );
}

export default SearchFilter;

// App completed successfully...!