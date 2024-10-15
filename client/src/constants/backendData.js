// Database URL
const host = process.env.REACT_APP_REQURL;
const host2 = process.env.REACT_APP_REQURL;
// const host = 'https://tnp-website-new-version-5i79.onrender.com';
// const host2 = 'https://tnp-website-new-version-5i79.onrender.com';
// 1) YearWise Context APIs

// fetch all the records from database
const getYearWiseAlldetails = async () => {
    let url = `${host}/admin/placements/yearWise/getAll`;
    let response = await fetch(url, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        },
    });
    const json = await response.json();

    let arr = json["placementsInfo"].map((item) => {
        return {
            _id: item._id,
            Year: item.Year,
            BTechOnRoll: item.BTechOnRoll,
            BTechPlaced: item.BTechPlaced,
            MTechOnRoll: item.MTechOnRoll,
            MTechPlaced: item.MTechPlaced,
            TotalPlaced: item.TotalPlaced,
            TotalOffers: item.TotalOffers,
            AveragePackage: item.AveragePackage,
            PackageRange: item.PackageRange,
        }
    });
    return arr;
};

// create a new record in database
const createYearWiseRecord = async (userInp) => {
    // Logic to add a record to database
    let url = `${host}/admin/placements/yearWise/create`;
    let response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            "Year": userInp.Year,
            "BTechOnRoll": Number.parseInt(userInp.BTechOnRoll),
            "BTechPlaced": Number.parseInt(userInp.BTechPlaced),
            "MTechOnRoll": Number.parseInt(userInp.MTechOnRoll),
            "MTechPlaced": Number.parseInt(userInp.MTechPlaced),
            "TotalPlaced": Number.parseInt(userInp.TotalPlaced),
            "TotalOffers": Number.parseInt(userInp.TotalOffers),
            "AveragePackage": userInp.AveragePackage,
            "PackageRange": userInp.PackageRange
        })
    });

    const json = await response.json();
    // console.log(json);
}

// edit a record
const editYearWiseRecord = async (prevYear, userInp) => {
    // console.log(prevYear, userInp.Year);

    // Logic to edit a record to database
    let url = `${host}/admin/placements/yearWise/edit`;
    let response = await fetch(url, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            "Response": [
                {
                    "Year": prevYear
                },
                {
                    "Year": userInp.Year,
                    "BTechOnRoll": userInp.BTechOnRoll,
                    "BTechPlaced": userInp.BTechPlaced,
                    "MTechOnRoll": userInp.MTechOnRoll,
                    "MTechPlaced": userInp.MTechPlaced,
                    "TotalPlaced": userInp.TotalPlaced,
                    "TotalOffers": userInp.TotalOffers,
                    "AveragePackage": userInp.AveragePackage,
                    "PackageRange": userInp.PackageRange
                }
            ]
        })
    });

    const json = await response.json();
    // console.log(json);
}

// delete a record
const deleteYearWiseRecord = async (userInp) => {
    // Logic to edit a record to database
    let url = `${host}/admin/placements/yearWise/delete`;
    let response = await fetch(url, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({

            "Year": userInp.Year

        })
    });

    const json = await response.json();
    // console.log(json);
}


//////////////////////////////////////////////////////////////////////////////////////

// 2) Graph Context APIs

// fetch all the records from database
const getGraphAlldetails = async () => {
    let url = `${host}/admin/placements/graph/getAll`;
    let response = await fetch(url, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        },
    });
    const json = await response.json();

    let arr = json.map((item, index) => {
        return {
            "year": item.Year,
            "Under Graduate": item.UnderGraduate,
            "Post Graduate": item.PostGraduate,
            "TotalOffers": item.TotalOffers,
            "Total": item.Total,
            dataKey: index,
        }
    });

    return arr;
};


// create a new record in database
const createGraphRecord = async (userInp) => {
    // Logic to create a new record to database
    let url = `${host}/admin/placements/graph/create`;
    let response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            "Year": userInp.Year,
            "UnderGraduate": Number.parseInt(userInp.UnderGraduate),
            "PostGraduate": Number.parseInt(userInp.PostGraduate),
            "TotalOffers": Number.parseInt(userInp.TotalOffers),
            "Total": Number.parseInt(userInp.Total)
        })
    });

    const json = await response.json();
    // console.log(json);
}

// edit a record
const editGraphRecord = async (PrevYear, userInp) => {
    // Logic to edit a record to database
    let url = `${host}/admin/placements/graph/editRecord`;
    let response = await fetch(url, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            "Response": [
                {
                    "Year": PrevYear
                },
                {
                    "Year": userInp.Year,
                    "UnderGraduate": userInp.UnderGraduate,
                    "PostGraduate": userInp.PostGraduate,
                    "TotalOffers": userInp.TotalOffers,
                    "Total": userInp.Total
                }
            ]

        })
    });

    const json = await response.json();
    // console.log(json);
}

// delete a record
const deleteGraphRecord = async (Year) => {
    // Logic to edit a record to database
    let url = `${host}/admin/placements/graph/delete`;
    let response = await fetch(url, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            "Year": Year
        })
    });

    const json = await response.json();
    // console.log(json);
}

//////////////////////////////////////////////////////////////////////////////////////
// 3) Department Context API
// fetch all the records from database
const getDeptAlldetails = async () => {
    let url = `${host}/admin/placements/department/getAll`;
    let response = await fetch(url, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        },
    });
    const json = await response.json();

    let arr = json.map((item, index) => {

        return {
            "_id": item._id,
            dataKey: index,
            "departments": item.departments.map((innerItem) => {
                return {
                    "_id": innerItem._id,
                    "Year": innerItem.Year,
                    "Department": innerItem.Department.toUpperCase(),
                    "UndergradTotal": innerItem.UndergradTotal,
                    "UndergradPlaced": innerItem.UndergradPlaced,
                    "PostgradTotal": innerItem.PostgradTotal,
                    "PostgradPlaced": innerItem.PostgradPlaced,
                    dataKey: innerItem._id
                }
            })
        }
    })
    // console.log(arr);
    return arr;
};


// create a new record in database
const createDeptRecord = async (userInp) => {
    console.log(userInp);
    // Logic to create a new record to database
    let url = `${host}/admin/placements/department/create`;
    let response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            "Year": userInp.Year,
            "Department": userInp.Department.toUpperCase(),
            "UndergradTotal": Number.parseInt(userInp.UndergradTotal),
            "UndergradPlaced": Number.parseInt(userInp.UndergradPlaced),
            "PostgradTotal": Number.parseInt(userInp.PostgradTotal),
            "PostgradPlaced": Number.parseInt(userInp.PostgradPlaced)
        })
    });

    const json = await response.json();
    // console.log(json);
}

// edit a record
const editDeptRecord = async (_id, userInp) => {
    // Logic to edit a record to database
    let url = `${host}/admin/placements/department/editRecord`;
    let response = await fetch(url, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            "Response": [
                {
                    "_id": _id._id
                },
                {
                    "Year": userInp.Year,
                    "Department": userInp.Department.toUpperCase(),
                    "UndergradTotal": Number.parseInt(userInp.UndergradTotal),
                    "UndergradPlaced": Number.parseInt(userInp.UndergradPlaced),
                    "PostgradTotal": Number.parseInt(userInp.PostgradTotal),
                    "PostgradPlaced": Number.parseInt(userInp.PostgradPlaced)
                }
            ]

        })
    });

    const json = await response.json();
    // console.log(json);
}

// delete a record
const deleteDeptRecord = async (userInp) => {
    // Logic to edit a record to database
    let url = `${host}/admin/placements/department/delete`;
    let response = await fetch(url, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            "Year": userInp.Year,
            "Department": userInp.Department.toUpperCase()
        })
    });

    const json = await response.json();
    // console.log(json);
}
//////////////////////////////////////////////////////////////////////////////////////
// 4) News Section API
// fetch all the records from database
const getAllNews = async () => {
    let url = `${host2}/newsUpdates/getAllNews`;
    let response = await fetch(url, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        },
    });
    const json = await response.json();
    // console.log(json)
    let arr = json['newsInfo'].map((item, index) => {
        return {
            Title: item.Title,
            Description: item.Description,
            Date: item.Date,
            ImageLink: item.ImageLink,
            ID: item.Title + item.Date
        }
    });
    // console.log(arr);
    return arr;
};


// create a new record in database
const createNews = async (userInp) => {
    // console.log(userInp);
    // Logic to create a new record to database
    let url = `${host2}/newsUpdates/create`;
    let response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            "Title": userInp.Title,
            "Description": userInp.Description,
            "Date": userInp.Date,
            "ImageLink": userInp.ImageLink,
            "ID": userInp.Title + userInp.Date
        })
    });

    const json = await response.json();
    // console.log(json);
}

// edit a record
const editNews = async (_id, userInp) => {
    // Logic to edit a record to database
    let url = `${host2}/newsUpdates/editNews`;
    let response = await fetch(url, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            "Title": userInp.Title,
            "Description": userInp.Description,
            "Date": userInp.Date,
            "ImageLink": userInp.ImageLink,
            "ID": _id
        })
    });

    // const json = await response.json();
    // console.log(json);
}

// delete a record
const deleteNews = async (_id) => {
    // Logic to delete a record to database
    let url = `${host2}/newsUpdates/delete`;
    let response = await fetch(url, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
           "ID":_id.ID
        })
    });

    // const json = await response.json();
    // console.log(json);
}

export { getYearWiseAlldetails, createYearWiseRecord, editYearWiseRecord, deleteYearWiseRecord, getDeptAlldetails, createDeptRecord, editDeptRecord, deleteDeptRecord, getGraphAlldetails, createGraphRecord, editGraphRecord, deleteGraphRecord,createNews,getAllNews,editNews,deleteNews };