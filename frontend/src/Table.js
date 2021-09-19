import React from 'react'
import MaterialTable from 'material-table'

export const Table=()=>{
    const data=[
        {title: 'An experimental evaluation of test driven development vs. test-last development with industry professionals',
        authors: "Munir, H., Wnuk, K., Petersen, K., Moayyed, M.",
        source: "EASE",
        pubyear: "2014",
        doi: "https://doi.org/10.1145/2601248.2601267",
        claim: "product quality improvement", 
        evidence: "weak support"},
        
        {title: 'Realizing quality improvement through test driven development: results and experiences of four industrial teams',
        authors: "Nagappan, N., Maximilien, E. M., Bhat, T., Williams, L.",
        source: " Empirical Software Engineering, 13(3), 289–302",
        pubyear: "2008",
        doi: "https://doi.org/10.1007/s10664-008-9062-z",
        claim: "product quality improvement", 
        evidence: "weak support"},

        {title: "Does Test-Driven Development Really Improve Software Design Quality?",
        authors: "Janzen, D. S.",
        source: "Software, IEEE, 25(2) 77-84",
        pubyear: "2008",
        doi: "",
        claim: "code quality improvement", 
        evidence: "strong support"},
        
    ]

    const columns=[
        {
            title: 'Title', field: 'title'
        },
        {
            title: 'Authors', field: 'authors'
        },
        {
            title: 'Source', field: 'source'
        },
        {
            title: 'Pubyear', field: 'pubyear'
        },
        {
            title: 'DOI', field: 'doi'
        },
        {
            title: 'Claim', field: 'claim'
        },
        {
            title: 'Evidence', field: 'evidence'
        }

    ]

    return(<div>
        <MaterialTable title="Material Table"
        data={data}
        columns={columns}
    />
    </div>)
}