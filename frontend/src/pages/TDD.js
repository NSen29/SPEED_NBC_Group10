import React, { useState } from 'react';
import MaterialTable from "material-table";
import { forwardRef } from 'react';
import { MuiThemeProvider } from '@material-ui/core'
import { createMuiTheme } from '@material-ui/core/styles';
import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';
import Typography from "@material-ui/core/Typography";
//create variable for the different options and tools seen on the webpage and their assigned icons for each
const symbolsForOptions = {
        Add: forwardRef((props, ref) => < AddBox {...props }
                ref = { ref }
                />),
                Check: forwardRef((props, ref) => < Check {...props }
                    ref = { ref }
                    />),
                    Clear: forwardRef((props, ref) => < Clear {...props }
                        ref = { ref }
                        />),
                        Delete: forwardRef((props, ref) => < DeleteOutline {...props }
                            ref = { ref }
                            />),
                            DetailPanel: forwardRef((props, ref) => < ChevronRight {...props }
                                ref = { ref }
                                />),
                                Edit: forwardRef((props, ref) => < Edit {...props }
                                    ref = { ref }
                                    />),
                                    Export: forwardRef((props, ref) => < SaveAlt {...props }
                                        ref = { ref }
                                        />),
                                        Filter: forwardRef((props, ref) => < FilterList {...props }
                                            ref = { ref }
                                            />),
                                            FirstPage: forwardRef((props, ref) => < FirstPage {...props }
                                                ref = { ref }
                                                />),
                                                LastPage: forwardRef((props, ref) => < LastPage {...props }
                                                    ref = { ref }
                                                    />),
                                                    NextPage: forwardRef((props, ref) => < ChevronRight {...props }
                                                        ref = { ref }
                                                        />),
                                                        PreviousPage: forwardRef((props, ref) => < ChevronLeft {...props }
                                                            ref = { ref }
                                                            />),
                                                            ResetSearch: forwardRef((props, ref) => < Clear {...props }
                                                                ref = { ref }
                                                                />),
                                                                Search: forwardRef((props, ref) => < Search {...props }
                                                                    ref = { ref }
                                                                    />),
                                                                    SortArrow: forwardRef((props, ref) => < ArrowDownward {...props }
                                                                        ref = { ref }
                                                                        />),
                                                                        ThirdStateCheck: forwardRef((props, ref) => < Remove {...props }
                                                                            ref = { ref }
                                                                            />),
                                                                            ViewColumn: forwardRef((props, ref) => < ViewColumn {...props }
                                                                                ref = { ref }
                                                                                />)
                                                                            };
                                                                            //Table created for storing and displaying all the necessary data concerning TDD
                                                                            export const TDD = () => {
                                                                                const [tableData, setTableData] = useState([{
                                                                                            ID: 1,
                                                                                            practice: 'TDD',
                                                                                            yearRange: 'LTY',
                                                                                            title: 'An experimental evaluation of test driven development vs. test-last development with industry professionals',
                                                                                            authors: "Munir, H., Wnuk, K., Petersen, K., Moayyed, M.",
                                                                                            source: "EASE",
                                                                                            pubyear: "2014",
                                                                                            doi: "https://doi.org/10.1145/2601248.2601267",
                                                                                            claim: "PQI",

                                                                                            evidence: "W"

                                                                                        },

                                                                                        {
                                                                                            ID: 2,
                                                                                            practice: 'MP',
                                                                                            yearRange: 'LTWEY',
                                                                                            title: 'Realizing quality improvement through test driven development: results and experiences of four industrial teams',
                                                                                            authors: "Nagappan, N., Maximilien, E. M., Bhat, T., Williams, L.",
                                                                                            source: " Empirical Software Engineering, 13(3), 289–302",
                                                                                            pubyear: "2008",
                                                                                            doi: "https://doi.org/10.1007/s10664-008-9062-z",
                                                                                            claim: "PQI",
                                                                                            evidence: "W"
                                                                                        },

                                                                                        {
                                                                                            ID: 3,
                                                                                            practice: 'TDD',
                                                                                            yearRange: 'LTWEY',
                                                                                            title: "Does Test-Driven Development Really Improve Software Design Quality?",
                                                                                            authors: "Janzen, D. S.",
                                                                                            source: "Software, IEEE, 25(2) 77-84",
                                                                                            pubyear: "2008",
                                                                                            doi: "",
                                                                                            claim: "CQI",
                                                                                            evidence: "S"
                                                                                        },

                                                                                        {
                                                                                            ID: 4,
                                                                                            practice: 'MP',
                                                                                            yearRange: 'LFY',
                                                                                            title: "Comparative Case Study on the Impact of Test-Driven Development on Program Design and Test Coverage",
                                                                                            authors: "Siniaalto, M., Abrahamsson, P.",
                                                                                            source: "ArXiv.Org, cs.SE, arXiv:1711.05082-284",
                                                                                            pubyear: "2017",
                                                                                            doi: "",
                                                                                            claim: "CQI",
                                                                                            evidence: "W"
                                                                                        },

                                                                                        {
                                                                                            ID: 5,
                                                                                            practice: 'UT',
                                                                                            yearRange: 'LTWEY',
                                                                                            title: "Driving Software Quality: How Test-Driven Development Impacts Software Quality.",
                                                                                            authors: "Crispin, L",
                                                                                            source: "IEEE Software, 23(6), 70–71.",
                                                                                            pubyear: "2006",
                                                                                            doi: "https://doi.org/10.1109/ms.2006.157",
                                                                                            claim: "CQI",
                                                                                            evidence: "S"
                                                                                        },

                                                                                        {
                                                                                            ID: 6,
                                                                                            practice: 'TDD',
                                                                                            yearRange: 'LTWEY',
                                                                                            title: "Test-Driven Development as a Defect-Reduction Practice.",
                                                                                            authors: "Williams, L., Maximilien, E. M. & Vouk, M.",
                                                                                            source: "4th International Symposium on Software Reliability Engineering, 2003. ISSRE 2003, 34–45.",
                                                                                            pubyear: "2001",
                                                                                            doi: "https://doi.org/10.1109/issre.2003.1251029",
                                                                                            claim: "PQI",
                                                                                            evidence: "S"
                                                                                        },

                                                                                        {
                                                                                            ID: 7,
                                                                                            practice: 'MP',
                                                                                            yearRange: 'LTWOY',
                                                                                            title: "An Empirical Study of Test-Driven Development vs. Test-Last Development Using Eye Tracking.",
                                                                                            authors: "Choma, J., Guerra, E. M., Silva, T. S. da, Albuquerque, T., Albuquerque, V. G. & Zaina, L. M.",
                                                                                            source: "WBMA, 1106(1), 11–24.",
                                                                                            pubyear: "2019",
                                                                                            doi: "https://doi.org/10.1007/978-3-030-36701-5_2",
                                                                                            claim: "CQI",
                                                                                            evidence: "W"
                                                                                        }, {
                                                                                            ID: 8,
                                                                                            practice: 'R',
                                                                                            yearRange: 'LTY',
                                                                                            title: "Causal Factors, Benefits and Challenges of Test-Driven Development: Practitioner Perceptions.",
                                                                                            authors: "Buchan, Ji., Li, L. & MacDonell, S. G",
                                                                                            source: "18TH ASIA PACIFIC SOFTWARE ENGINEERING CONFERENCE 2012",
                                                                                            pubyear: "2012",
                                                                                            doi: "https://doi.org/10.1109/apsec.2011.44",
                                                                                            claim: "TSI",
                                                                                            evidence: "W"
                                                                                        }, {
                                                                                            ID: 9,
                                                                                            practice: 'UT',
                                                                                            yearRange: 'LTY',
                                                                                            title: "Causal Factors, Benefits and Challenges of Test-Driven Development: Practitioner Perceptions.",
                                                                                            authors: "Buchan, Ji., Li, L. & MacDonell, S. G",
                                                                                            source: "18TH ASIA PACIFIC SOFTWARE ENGINEERING CONFERENCE 2012",
                                                                                            pubyear: "2012",
                                                                                            doi: "https://doi.org/10.1109/apsec.2011.44",
                                                                                            claim: "PQI",
                                                                                            evidence: "W"
                                                                                        },
                                                                                    ])
                                                                                    //may implement optional switch to change from light and dark modes
                                                                                const [alterDarkMode, setAlterDarkMode] = useState(true)
                                                                                const claimInfo = [{
                                                                                        ID: 'Article No:',
                                                                                        field: 'ID',
                                                                                        filtering: false,
                                                                                        sorting: true,
                                                                                        align: 'center',



                                                                                        defaultSort: "asc",
                                                                                        cellStyle: { background: "#528AAE" },
                                                                                        rowStyle: {
                                                                                            fontSize: 50,
                                                                                        },
                                                                                        headerStyle: { color: "#fff", fontSize: 50, },
                                                                                    }, {
                                                                                        ID: 'Year Range',
                                                                                        field: 'yearRange',

                                                                                        sorting: false,
                                                                                        lookup: { LTWOY: "2 years ago", LFY: "5 years ago", LTY: "10 years ago", LTWEY: "20 years ago" },


                                                                                        cellStyle: { background: "#528AAE" },
                                                                                        rowStyle: {
                                                                                            fontSize: 30,
                                                                                        },
                                                                                        headerStyle: { color: "#fff", fontSize: 20, },
                                                                                    }, {
                                                                                        ID: 'Software Engineering Practice',
                                                                                        field: 'practice',

                                                                                        sorting: false,
                                                                                        lookup: { TDD: "TDD", MP: "Mob Programming", R: "Refactoring", UT: "Unit Testing" },

                                                                                        cellStyle: { background: "#528AAE" },
                                                                                        rowStyle: {
                                                                                            fontSize: 30,
                                                                                        },
                                                                                        headerStyle: { color: "#fff", fontSize: 20, },
                                                                                    }, {
                                                                                        title: 'Title of Evidence',
                                                                                        field: 'title',
                                                                                        sorting: true,
                                                                                        filtering: false,
                                                                                        cellStyle: { background: "" },
                                                                                        rowStyle: {
                                                                                            fontSize: 30,
                                                                                        },
                                                                                        headerStyle: { color: "#fff", fontSize: 20, },
                                                                                    },
                                                                                    {
                                                                                        title: 'Authors of Evidence',
                                                                                        field: 'authors',
                                                                                        sorting: true,
                                                                                        filtering: false,
                                                                                        align: "center",
                                                                                        cellStyle: { background: "	" },
                                                                                        headerStyle: { color: "#fff", fontSize: 20, }
                                                                                    },
                                                                                    {
                                                                                        title: 'Source of Claim',
                                                                                        field: 'source',
                                                                                        sorting: true,
                                                                                        align: "center",
                                                                                        filtering: false,
                                                                                        searching: false,

                                                                                        cellStyle: { background: "" },
                                                                                        headerStyle: { color: "#fff", fontSize: 20, }

                                                                                    },
                                                                                    {
                                                                                        title: 'Year of Publication',
                                                                                        field: 'pubyear',
                                                                                        align: "",
                                                                                        SortArrow: 'arrow_upward',


                                                                                        sorting: true,
                                                                                        filtering: false,
                                                                                        defaultSort: "asc",
                                                                                        cellStyle: { background: "" },
                                                                                        headerStyle: { color: "#fff", fontSize: 20, }

                                                                                    },
                                                                                    {
                                                                                        title: 'DOI',
                                                                                        field: 'doi',
                                                                                        sorting: true,
                                                                                        searching: false,
                                                                                        filtering: false,
                                                                                        align: "center",
                                                                                        cellStyle: { background: "" },
                                                                                        headerStyle: { color: "#fff", fontSize: 20, }

                                                                                    },
                                                                                    {
                                                                                        title: 'Claim Type for Improvement',
                                                                                        field: 'claim',
                                                                                        sorting: true,
                                                                                        searching: false,
                                                                                        grouping: false,
                                                                                        align: "center",
                                                                                        filtering: false,
                                                                                        lookup: { PQI: "Product Quality", CQI: "Code Quality", TSI: "Team-Satisfaction Quality" },
                                                                                        cellStyle: { background: "#3A9960" },
                                                                                        headerStyle: { color: "#fff", fontSize: 20, }

                                                                                    },
                                                                                    {
                                                                                        title: 'Rating of Evidence',
                                                                                        field: 'evidence',
                                                                                        searching: false,
                                                                                        align: "center",
                                                                                        sorting: true,
                                                                                        grouping: false,
                                                                                        filtering: false,
                                                                                        lookup: { S: "Strong Support", W: "Weak Support" },

                                                                                        cellStyle: { background: "#DB3B3B" },
                                                                                        headerStyle: { color: "#fff", fontSize: 20, }

                                                                                    }

                                                                                ]

                                                                                const theme = createMuiTheme({
                                                                                    palette: {
                                                                                        type: 'dark'

                                                                                    }
                                                                                })
                                                                                return ( <
                                                                                    div >
                                                                                    <
                                                                                    h1 align = "center" > SOFTWARE ENGINEERING PRACTICES < /h1>  <
                                                                                    h3 align = 'center' > Select a practice from the dropdown below < /h3>   <
                                                                                    MuiThemeProvider theme = { theme } >
                                                                                    <
                                                                                    MaterialTable title = "SPEED DATABASE"
                                                                                    data = { tableData }
                                                                                    columns = { claimInfo }
                                                                                    /*
                                                                                    editable = {
                                                                                        {
                                                                                            onRowAdd: (newRow) => new Promise((resolve, reject) => {
                                                                                                setTableData([...tableData, newRow])
                                                                                                setTimeout(() => resolve(), 500)

                                                                                            }),
                                                                                            onRowUpdate: (newRow, oldRow) => new Promise((resolve, reject) => {
                                                                                                const claimUpdated = [...tableData]
                                                                                                claimUpdated[oldRow.tableData.id] = newRow
                                                                                                setTableData(claimUpdated)
                                                                                                console.log(newRow, oldRow)
                                                                                                setTimeout(() => resolve(), 500)
                                                                                            })
                                                                                        }
                                                                                    }
                                                                                       */
                                                                                    icons = { symbolsForOptions }
                                                                                    options = {
                                                                                        {
                                                                                            columnsButton: true,
                                                                                            sorting: true,
                                                                                            search: true,
                                                                                            searchFieldAlignment: 'right',
                                                                                            searchAutoFocus: true,
                                                                                            filtering: true,
                                                                                            rowStyle: {
                                                                                                fontSize: 15,
                                                                                                fontStyle: 'Droid Sans',
                                                                                            },
                                                                                            headerStyle: { background: "#003366", fontStyle: "oblique", fontSize: 15 },
                                                                                            actionsColumnIndex: -1,
                                                                                            grouping: false,
                                                                                        }

                                                                                    }
                                                                                    /> < /
                                                                                    MuiThemeProvider > / > < /
                                                                                    div >
                                                                                )

                                                                            }