/*
Given an encoded string, return it's decoded string.

The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is being repeated exactly k times. Note that k is guaranteed to be a positive integer.

You may assume that the input string is always valid; No extra white spaces, square brackets are well-formed, etc.

Furthermore, you may assume that the original data does not contain any digits and that digits are only for those repeat numbers, k. For example, there won't be input like 3a or 2[4].

Examples:

s = "3[a]2[bc]", return "aaabcbc".
s = "3[a2[c]]", return "accaccacc".
s = "2[abc]3[cd]ef", return "abcabccdcdcdef".
*/

'use strict'

/**
 * @param {string} s
 * @return {string}
 */
const decodeString = function(s) {
  const stack = []
  const reps = []

  let output = ''
  let rep = 0
  for (let i = 0; i < s.length; ++i) {
    const c = s[i]
    if (c === '[') {
      stack.push(output)
      output = ''
      reps.push(rep)
      rep = 0
    }
    else if (c === ']') {
      output = stack.pop() + output.repeat(reps.pop())
    }
    else if ((c >= '0') && (c <= '9')) {
      rep = (10 * rep) + (c - '0')
    }
    else {
      output += c
    }
  }

  return output
 }
