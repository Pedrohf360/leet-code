/**
 * @param {string} val
 * @return {Object}
 */
var expect = function(val) {
    return {
        toBe: function(equalTo) {
            if(val === equalTo) return true
            else throw new Error('Not Equal')
        },
        notToBe: function(notEqualTo) {
            if(val !== notEqualTo) return true
            else throw new Error('Equal')
        }
    }
};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */