const obj = {
    property_1: {
        location: "South Africa - JHB",
            property_details: {
            bedrooms_number: 5,
            garage_number: 2,
            bathrooms: 3
        }
    },

    property_2: {
        location: "South Africa - CPT",
            property_details: {
            bedrooms_number: 5,
            garage_number: 2,
            bathrooms: 3
        }
    }
}
console.log(obj.property_1.location);

const _personalInfo = {
    _firstName: "Ashley", _lastName: "Motsie",
    _city: "Rustenburg", _zipCode: 0o313
};

const { _firstName: fn, _lastName: ln } = _personalInfo;
console.log(`${fn} ${ln}`);
