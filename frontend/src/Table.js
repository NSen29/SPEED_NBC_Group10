import React from 'react';
import MaterialTable from "material-table";
import { forwardRef } from 'react';

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
                                                                            export const Table = () => {
                                                                                const tableData = [{
                                                                                        title: 'An experimental evaluation of test driven development vs. test-last development with industry professionals',
                                                                                        authors: "Munir, H., Wnuk, K., Petersen, K., Moayyed, M.",
                                                                                        source: "EASE",
                                                                                        pubyear: "2014",
                                                                                        doi: "https://doi.org/10.1145/2601248.2601267",
                                                                                        claim: "PQI",
                                                                                        evidence: "W"

                                                                                    },

                                                                                    {
                                                                                        title: 'Realizing quality improvement through test driven development: results and experiences of four industrial teams',
                                                                                        authors: "Nagappan, N., Maximilien, E. M., Bhat, T., Williams, L.",
                                                                                        source: " Empirical Software Engineering, 13(3), 289–302",
                                                                                        pubyear: "2008",
                                                                                        doi: "https://doi.org/10.1007/s10664-008-9062-z",
                                                                                        claim: "PQI",
                                                                                        evidence: "W"
                                                                                    },

                                                                                    {
                                                                                        title: "Does Test-Driven Development Really Improve Software Design Quality?",
                                                                                        authors: "Janzen, D. S.",
                                                                                        source: "Software, IEEE, 25(2) 77-84",
                                                                                        pubyear: "2008",
                                                                                        doi: "",
                                                                                        claim: "CQI",
                                                                                        evidence: "S"
                                                                                    },

                                                                                    {
                                                                                        title: "Comparative Case Study on the Impact of Test-Driven Development on Program Design and Test Coverage",
                                                                                        authors: "Siniaalto, M., Abrahamsson, P.",
                                                                                        source: "ArXiv.Org, cs.SE, arXiv:1711.05082-284",
                                                                                        pubyear: "2017",
                                                                                        doi: "",
                                                                                        claim: "CQI",
                                                                                        evidence: "W"
                                                                                    },

                                                                                    {
                                                                                        title: "Driving Software Quality: How Test-Driven Development Impacts Software Quality.",
                                                                                        authors: "Crispin, L",
                                                                                        source: "IEEE Software, 23(6), 70–71.",
                                                                                        pubyear: "2006",
                                                                                        doi: "https://doi.org/10.1109/ms.2006.157",
                                                                                        claim: "CQI",
                                                                                        evidence: "S"
                                                                                    },

                                                                                    {
                                                                                        title: "Test-Driven Development as a Defect-Reduction Practice.",
                                                                                        authors: "Williams, L., Maximilien, E. M. & Vouk, M.",
                                                                                        source: "4th International Symposium on Software Reliability Engineering, 2003. ISSRE 2003, 34–45.",
                                                                                        pubyear: "2001",
                                                                                        doi: "https://doi.org/10.1109/issre.2003.1251029",
                                                                                        claim: "PQI",
                                                                                        evidence: "S"
                                                                                    },

                                                                                    {
                                                                                        title: "An Empirical Study of Test-Driven Development vs. Test-Last Development Using Eye Tracking.",
                                                                                        authors: "Choma, J., Guerra, E. M., Silva, T. S. da, Albuquerque, T., Albuquerque, V. G. & Zaina, L. M.",
                                                                                        source: "WBMA, 1106(1), 11–24.",
                                                                                        pubyear: "2019",
                                                                                        doi: "https://doi.org/10.1007/978-3-030-36701-5_2",
                                                                                        claim: "CQI",
                                                                                        evidence: "W"
                                                                                    },
                                                                                ]

                                                                                const claimInfo = [{
                                                                                        title: 'Title of Evidence',
                                                                                        field: 'title',
                                                                                        sorting: false,
                                                                                        cellStyle: { background: "#9FDBED" },
                                                                                        headerStyle: { color: "#fff" },
                                                                                    },
                                                                                    {
                                                                                        title: 'Authors of Evidence',
                                                                                        field: 'authors',
                                                                                        sorting: false,

                                                                                        cellStyle: { background: "	#90EE90" },
                                                                                        headerStyle: { color: "#fff" }
                                                                                    },
                                                                                    {
                                                                                        title: 'Source of Claim',
                                                                                        field: 'source',
                                                                                        sorting: false,
                                                                                        searching: false,
                                                                                        filtering: false,
                                                                                        cellStyle: { background: "#90EE90" },
                                                                                        headerStyle: { color: "#fff" }

                                                                                    },
                                                                                    {
                                                                                        title: 'Year of Publication',
                                                                                        field: 'pubyear',
                                                                                        align: "center",
                                                                                        SortArrow: 'arrow_upward',
                                                                                        defaultSort: "asc",
                                                                                        cellStyle: { background: "#90EE90" },
                                                                                        headerStyle: { color: "#fff", fontSize: 15 }

                                                                                    },
                                                                                    {
                                                                                        title: 'DOI',
                                                                                        field: 'doi',
                                                                                        sorting: false,
                                                                                        searching: false,
                                                                                        filtering: false,
                                                                                        align: "center",
                                                                                        cellStyle: { background: "#90EE90" },
                                                                                        headerStyle: { color: "#fff" }

                                                                                    },
                                                                                    {
                                                                                        title: 'Type of Claim',
                                                                                        field: 'claim',
                                                                                        sorting: false,
                                                                                        searching: false,
                                                                                        align: "center",
                                                                                        lookup: { PQI: "Product Quality", CQI: "Code Quality" },
                                                                                        cellStyle: { background: "#90EE90" },
                                                                                        headerStyle: { color: "#fff" }

                                                                                    },
                                                                                    {
                                                                                        title: 'Rating of Evidence',
                                                                                        field: 'evidence',
                                                                                        searching: false,
                                                                                        sorting: false,
                                                                                        lookup: { S: "Strong Support", W: "Weak Support" },

                                                                                        cellStyle: { background: "#FD5740 " },
                                                                                        headerStyle: { color: "#fff" }

                                                                                    }

                                                                                ]

                                                                                return ( <
                                                                                    div >
                                                                                    <
                                                                                    h1 align = "center" > SOFTWARE ENGINEERING PRACTICE < /h1>  <
                                                                                    h3 align = 'center' > Test Driven Development < /h3>  <
                                                                                    MaterialTable data = { tableData }
                                                                                    columns = { claimInfo }
                                                                                    icons = { symbolsForOptions }
                                                                                    options = {
                                                                                        {
                                                                                            sorting: true,
                                                                                            search: true,
                                                                                            searchFieldAlignment: 'right',
                                                                                            searchAutoFocus: true,
                                                                                            filtering: true,
                                                                                            headerStyle: { background: "#5885AF", fontStyle: "oblique", fontSize: 15 }
                                                                                        }

                                                                                    }
                                                                                    />

                                                                                    /
                                                                                    >
                                                                                    <
                                                                                    /
                                                                                    div >
                                                                                )

                                                                            }