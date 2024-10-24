/**
 * User Profile
 */

var profile = {
  userName: "alifarooq.zenkoders@gmail.com",
  nameIdFormat: "urn:oasis:names:tc:SAML:1.1:nameid-format:emailAddress",
  firstName: "Ali",
  lastName: "Farooq",
  eppn: "4250114991105",
  displayName: "Ali Farooq",
  email: "alifarooq.zenkoders@gmail.com",
  mobilePhone: "923167902206",
  groups: "Simple IdP Users, West Coast Users, Cloud Users",
};

/**
 * SAML Attribute Metadata
 */
var metadata = [
  {
    id: "firstName",
    optional: false,
    displayName: "First Name",
    description: "The given name of the user",
    multiValue: false,
  },
  {
    id: "lastName",
    optional: false,
    displayName: "Last Name",
    description: "The surname of the user",
    multiValue: false,
  },
  {
    id: "displayName",
    optional: true,
    displayName: "Display Name",
    description: "The display name of the user",
    multiValue: false,
  },
  {
    id: "email",
    optional: false,
    displayName: "E-Mail Address",
    description: "The e-mail address of the user",
    multiValue: false,
  },
  {
    id: "eppn",
    optional: false,
    displayName: "EPPN",
    description: "The unique id of the user",
    multiValue: false,
  },
];

module.exports = {
  user: profile,
  metadata: metadata,
};
