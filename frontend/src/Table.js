import React from 'react'
import MaterialTable from 'material-table'


export const Table = () => {
    const data = [{
            title: 'An experimental evaluation of test driven development vs. test-last development with industry professionals',
            authors: "Munir, H., Wnuk, K., Petersen, K., Moayyed, M.",
            source: "EASE",
            pubyear: "2014",
            doi: "https://doi.org/10.1145/2601248.2601267",
            claim: "Product Quality Improvement",
            evidence: "W"

        },

        {
            title: 'Realizing quality improvement through test driven development: results and experiences of four industrial teams',
            authors: "Nagappan, N., Maximilien, E. M., Bhat, T., Williams, L.",
            source: " Empirical Software Engineering, 13(3), 289–302",
            pubyear: "2008",
            doi: "https://doi.org/10.1007/s10664-008-9062-z",
            claim: "Product Quality Improvement",
            evidence: "W"
        },

        {
            title: "Does Test-Driven Development Really Improve Software Design Quality?",
            authors: "Janzen, D. S.",
            source: "Software, IEEE, 25(2) 77-84",
            pubyear: "2008",
            doi: "",
            claim: "Code Quality Improvement",
            evidence: "S"
        },

        {
            title: "Comparative Case Study on the Impact of Test-Driven Development on Program Design and Test Coverage",
            authors: "Siniaalto, M., Abrahamsson, P.",
            source: "ArXiv.Org, cs.SE, arXiv:1711.05082-284",
            pubyear: "2017",
            doi: "",
            claim: "Code Quality Improvement",
            evidence: "W"
        },

        {
            title: "Driving Software Quality: How Test-Driven Development Impacts Software Quality.",
            authors: "Crispin, L",
            source: "IEEE Software, 23(6), 70–71.",
            pubyear: "2006",
            doi: "https://doi.org/10.1109/ms.2006.157",
            claim: "Code Quality Improvement",
            evidence: "S"
        },

        {
            title: "Test-Driven Development as a Defect-Reduction Practice.",
            authors: "Williams, L., Maximilien, E. M. & Vouk, M.",
            source: "4th International Symposium on Software Reliability Engineering, 2003. ISSRE 2003, 34–45.",
            pubyear: "2001",
            doi: "https://doi.org/10.1109/issre.2003.1251029",
            claim: "Product Quality Improvement",
            evidence: "S"
        },

        {
            title: "An Empirical Study of Test-Driven Development vs. Test-Last Development Using Eye Tracking.",
            authors: "Choma, J., Guerra, E. M., Silva, T. S. da, Albuquerque, T., Albuquerque, V. G. & Zaina, L. M.",
            source: "WBMA, 1106(1), 11–24.",
            pubyear: "2019",
            doi: "https://doi.org/10.1007/978-3-030-36701-5_2",
            claim: "Code Quality Improvement",
            evidence: "W"
        },
    ]

    const columns = [{
            title: 'Title of Evidence',
            field: 'title',
            cellStyle: { background: "#9FDBED" },
            headerStyles: { color: "#fff" },
        },
        {
            title: 'Authors of Evidence',
            field: 'authors',
            cellStyle: { background: "	#90EE90" },
            headerStyles: { color: "#fff" }
        },
        {
            title: 'Source of Claim',
            field: 'source',
            cellStyle: { background: "#90EE90" },
            headerStyles: { color: "#fff" }

        },
        {
            title: 'Year of Publication',
            field: 'pubyear',
            align: "center",
            cellStyle: { background: "#90EE90" },
            headerStyles: { color: "#fff" }

        },
        {
            title: 'DOI',
            field: 'doi',
            align: "center",
            cellStyle: { background: "#90EE90" },
            headerStyles: { color: "#fff" }

        },
        {
            title: 'Type of Claim',
            field: 'claim',
            cellStyle: { background: "#90EE90" },
            headerStyles: { color: "#fff" }

        },
        {
            title: 'Rating of Evidence',
            field: 'evidence',
            lookup: { S: "Strong Support", cellStyle: { background: "#FD5740 " }, W: "Weak Support", cellStyle: { background: "#90EE90" } },
            cellStyle: { background: "#FD5740 " },
            headerStyles: { color: "#fff" }

        }

    ]

    return ( <
        div >

        <
        h1 align = "center" > SOFTWARE ENGINEERING PRACTICE < /h1>  <
        h3 align = 'center' > Test Driven Development < /h3> <
        MaterialTable data = { data }
        columns = { columns }

        /> < /
        div >
    )

}