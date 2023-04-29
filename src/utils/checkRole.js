/**
 * @description Check if the user has the role passed in the array, passing in multiple roles will check if the user has any of the roles
 * @param {Object} user - The logged in user object
 * @param {Array} roles - The roles to check against
 * @returns {Boolean} - Returns true if the user has the role, false if not
 * @example checkrole({user}, ['isAdmin'])
 * @example checkrole({user}, ['isAdmin', 'isPartner'])
 *
 * @author   Austin Howard
 * @version  1.0.1
 * @since    1.0.0
 *
 */
export default async (user, roles) => {
  if (!user) return false;
  // check if the roles is an array, if not, attempt to convert it to an array
  if (!Array.isArray(roles)) {
    // it may be a string seperated by commas or spaces, so we need to split it
    roles = roles.split(/[\s,]+/);
  }
  // roles is an array of roles to check against the user object,
  // we need to loop over the keys of the user object till we find a key that matches the role passed in the array
  // if the user has the role, check the boolean value of the key, if the value is true, return true else return false
  // if the user does not have the role, return false
  let hasRole = false;
  // console.log(roles.some((role) => user[role]));
  hasRole = roles.some((role) => {
    // console.log(`role: ${role}`);
    return user[role];
  });
  return hasRole;
};
