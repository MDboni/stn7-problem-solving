/**
 * STN-7 Problem Solving Assessment — All 20 solutions
 * Language: JavaScript (Node.js)
 * Run:  node solution.js   (runs the built-in test cases at the bottom)
 */

// =====================================================================
// Problem 1: Staircase
// Approach: row i has (n - i) spaces followed by i '#'. Join rows with '\n'.
// Time: O(n^2) characters produced, Space: O(n^2)
// =====================================================================
var staircase = function (n) {
  if (!Number.isInteger(n) || n <= 0) return "";
  const rows = [];
  for (let i = 1; i <= n; i++) {
    rows.push(" ".repeat(n - i) + "#".repeat(i));
  }
  return rows.join("\n");
};

// =====================================================================
// Problem 2: Grading Students
// Approach: grades < 38 stay; otherwise round up if next multiple of 5 is < 3 away.
// Time: O(n), Space: O(n)
// =====================================================================
var gradingStudents = function (grades) {
  return grades.map((grade) => {
    if (grade < 38) return grade;
    const nextMultiple = Math.ceil(grade / 5) * 5;
    return nextMultiple - grade < 3 ? nextMultiple : grade;
  });
};

// =====================================================================
// Problem 3: Time Conversion (12h -> 24h)
// Approach: parse hour + AM/PM; 12AM -> 00, PM (except 12) -> +12.
// Time: O(1), Space: O(1)
// =====================================================================
var timeConversion = function (s) {
  const period = s.slice(-2).toUpperCase();
  const [hh, mm, ss] = s.slice(0, -2).split(":");
  let hour = parseInt(hh, 10);

  if (period === "AM" && hour === 12) hour = 0;
  else if (period === "PM" && hour !== 12) hour += 12;

  return `${String(hour).padStart(2, "0")}:${mm}:${ss}`;
};

// =====================================================================
// Problem 4: String Repeat
// Approach: simple loop (avoids relying on String.prototype.repeat).
// Time: O(n * |s|), Space: O(n * |s|)
// =====================================================================
var repeatStr = function (n, s) {
  let result = "";
  for (let i = 0; i < n; i++) result += s;
  return result;
};

// =====================================================================
// Problem 5: Reversed Strings
// Approach: walk from the end to the start (original string is untouched).
// Time: O(n), Space: O(n)
// =====================================================================
var solution = function (str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) reversed += str[i];
  return reversed;
};

// =====================================================================
// Problem 6: Sum of Positive
// Approach: add only numbers strictly greater than zero.
// Time: O(n), Space: O(1)
// =====================================================================
var positiveSum = function (arr) {
  let sum = 0;
  for (const num of arr) {
    if (num > 0) sum += num;
  }
  return sum;
};

// =====================================================================
// Problem 7: Grasshopper — Summation
// Approach: Gauss formula n(n+1)/2  (O(1)). An iterative loop gives the same result.
// Time: O(1), Space: O(1)
// =====================================================================
var summation = function (num) {
  if (num < 1) return 0;
  return (num * (num + 1)) / 2;
};

// =====================================================================
// Problem 8: Convert a Boolean to a String
// Approach: explicit ternary so the return type is always a string.
// Time: O(1), Space: O(1)
// =====================================================================
var booleanToString = function (b) {
  return b ? "true" : "false";
};

// =====================================================================
// Problem 9: Fizz Buzz
// Approach: check divisibility by 15 first, then 3, then 5.
// Time: O(n), Space: O(n)
// =====================================================================
var fizzBuzz = function (n) {
  const result = [];
  for (let i = 1; i <= n; i++) {
    if (i % 15 === 0) result.push("FizzBuzz");
    else if (i % 3 === 0) result.push("Fizz");
    else if (i % 5 === 0) result.push("Buzz");
    else result.push(String(i));
  }
  return result;
};

// =====================================================================
// Problem 10: Running Sum of 1D Array
// Approach: keep a running total and push it at every index (new array).
// Time: O(n), Space: O(n)
// =====================================================================
var runningSum = function (nums) {
  const result = [];
  let total = 0;
  for (const num of nums) {
    total += num;
    result.push(total);
  }
  return result;
};

// =====================================================================
// Problem 11: Richest Customer Wealth
// Approach: sum each row, track the maximum.
// Time: O(m * n), Space: O(1)
// =====================================================================
var maximumWealth = function (accounts) {
  let max = 0;
  for (const customer of accounts) {
    let wealth = 0;
    for (const amount of customer) wealth += amount;
    if (wealth > max) max = wealth;
  }
  return max;
};

// =====================================================================
// Problem 12: Remove Duplicates from Sorted Array (in-place)
// Approach: two pointers — k marks where the next unique value goes.
// Time: O(n), Space: O(1)
// =====================================================================
var removeDuplicates = function (nums) {
  if (nums.length === 0) return 0;
  let k = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[k - 1]) {
      nums[k] = nums[i];
      k++;
    }
  }
  return k;
};

// =====================================================================
// Problem 13: Contains Duplicate
// Approach: Set lookup — return true as soon as a value is seen twice.
// Time: O(n), Space: O(n)
// =====================================================================
var containsDuplicate = function (nums) {
  const seen = new Set();
  for (const num of nums) {
    if (seen.has(num)) return true;
    seen.add(num);
  }
  return false;
};

// =====================================================================
// Problem 14: Move Zeroes (in-place)
// Approach: write non-zero values forward, then fill the rest with 0.
// Time: O(n), Space: O(1)
// =====================================================================
var moveZeroes = function (nums) {
  let insertPos = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[insertPos] = nums[i];
      insertPos++;
    }
  }
  while (insertPos < nums.length) {
    nums[insertPos] = 0;
    insertPos++;
  }
};

// =====================================================================
// Problem 15: Merge Sorted Array (in-place into nums1)
// Approach: fill nums1 from the back using three pointers so nothing is overwritten.
// Time: O(m + n), Space: O(1)
// =====================================================================
var merge = function (nums1, m, nums2, n) {
  let i = m - 1;
  let j = n - 1;
  let write = m + n - 1;
  while (j >= 0) {
    if (i >= 0 && nums1[i] > nums2[j]) {
      nums1[write] = nums1[i];
      i--;
    } else {
      nums1[write] = nums2[j];
      j--;
    }
    write--;
  }
};

// =====================================================================
// Problem 16: 3Sum
// Approach: sort, fix one number, two-pointer search for the remaining pair,
//           skip duplicates to keep triplets unique.
// Time: O(n^2), Space: O(1) extra (excluding output / sort)
// =====================================================================
var threeSum = function (nums) {
  const arr = [...nums].sort((a, b) => a - b); // don't mutate the caller's array
  const result = [];

  for (let i = 0; i < arr.length - 2; i++) {
    if (arr[i] > 0) break; // smallest number positive -> no more zero sums
    if (i > 0 && arr[i] === arr[i - 1]) continue; // skip duplicate first values

    let left = i + 1;
    let right = arr.length - 1;
    while (left < right) {
      const sum = arr[i] + arr[left] + arr[right];
      if (sum === 0) {
        result.push([arr[i], arr[left], arr[right]]);
        while (left < right && arr[left] === arr[left + 1]) left++;
        while (left < right && arr[right] === arr[right - 1]) right--;
        left++;
        right--;
      } else if (sum < 0) {
        left++;
      } else {
        right--;
      }
    }
  }
  return result;
};

// =====================================================================
// Problem 17: Plus One
// Approach: add 1 from the last digit, propagate carry; prepend 1 if all were 9.
// Time: O(n), Space: O(1) (O(n) only when a new digit is needed)
// =====================================================================
var plusOne = function (digits) {
  const result = [...digits];
  for (let i = result.length - 1; i >= 0; i--) {
    if (result[i] < 9) {
      result[i]++;
      return result;
    }
    result[i] = 0; // 9 + 1 -> 0, carry continues
  }
  result.unshift(1);
  return result;
};

// =====================================================================
// Problem 18: Reverse String (in-place)
// Approach: two pointers swapping from both ends.
// Time: O(n), Space: O(1)
// =====================================================================
var reverseString = function (s) {
  let left = 0;
  let right = s.length - 1;
  while (left < right) {
    const temp = s[left];
    s[left] = s[right];
    s[right] = temp;
    left++;
    right--;
  }
};

// =====================================================================
// Problem 19: Length of Last Word
// Approach: skip trailing spaces from the end, then count non-space characters.
// Time: O(n), Space: O(1)
// =====================================================================
var lengthOfLastWord = function (s) {
  let i = s.length - 1;
  while (i >= 0 && s[i] === " ") i--;
  let length = 0;
  while (i >= 0 && s[i] !== " ") {
    length++;
    i--;
  }
  return length;
};

// =====================================================================
// Problem 20: Longest Common Prefix
// Approach: vertical scan — compare each character index across all strings.
// Time: O(S) where S = total characters, Space: O(1)
// =====================================================================
var longestCommonPrefix = function (strs) {
  if (!strs || strs.length === 0) return "";
  const first = strs[0];
  for (let i = 0; i < first.length; i++) {
    const ch = first[i];
    for (let j = 1; j < strs.length; j++) {
      if (i >= strs[j].length || strs[j][i] !== ch) {
        return first.slice(0, i);
      }
    }
  }
  return first;
};

// =====================================================================
// Exports (so solutions can be imported / auto-graded)
// =====================================================================
if (typeof module !== "undefined") {
  module.exports = {
    staircase, gradingStudents, timeConversion, repeatStr, solution,
    positiveSum, summation, booleanToString, fizzBuzz, runningSum,
    maximumWealth, removeDuplicates, containsDuplicate, moveZeroes, merge,
    threeSum, plusOne, reverseString, lengthOfLastWord, longestCommonPrefix,
  };
}

// =====================================================================
// Test cases (run: node solution.js)
// =====================================================================
if (typeof require !== "undefined" && require.main === module) {
  const eq = (a, b) => JSON.stringify(a) === JSON.stringify(b);
  let passed = 0, failed = 0;
  const test = (name, actual, expected) => {
    if (eq(actual, expected)) passed++;
    else { failed++; console.log(`FAIL ${name}: expected ${JSON.stringify(expected)}, got ${JSON.stringify(actual)}`); }
  };
  const inPlace = (fn, arr, ...rest) => { fn(arr, ...rest); return arr; };

  test("P1 n=4", staircase(4), "   #\n  ##\n ###\n####");
  test("P1 n=1", staircase(1), "#");
  test("P2 a", gradingStudents([73, 67, 38, 33]), [75, 67, 40, 33]);
  test("P2 b", gradingStudents([84, 29, 57]), [85, 29, 57]);
  test("P3 a", timeConversion("07:05:45PM"), "19:05:45");
  test("P3 b", timeConversion("12:00:00AM"), "00:00:00");
  test("P3 c", timeConversion("12:30:45PM"), "12:30:45");
  test("P3 d", timeConversion("01:00:00AM"), "01:00:00");
  test("P4 a", repeatStr(3, "ha"), "hahaha");
  test("P4 b", repeatStr(0, "hello"), "");
  test("P4 c", repeatStr(4, "a"), "aaaa");
  test("P5 a", solution("world"), "dlrow");
  test("P5 b", solution("hello"), "olleh");
  test("P5 c", solution(""), "");
  test("P6 a", positiveSum([1, -4, 7, 12]), 20);
  test("P6 b", positiveSum([-1, -2, 0, -5]), 0);
  test("P6 c", positiveSum([]), 0);
  test("P7 a", summation(8), 36);
  test("P7 b", summation(1), 1);
  test("P8 a", booleanToString(true), "true");
  test("P8 b", booleanToString(false), "false");
  test("P9 a", fizzBuzz(5), ["1", "2", "Fizz", "4", "Buzz"]);
  test("P9 b", fizzBuzz(15), ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]);
  test("P10 a", runningSum([1, 2, 3, 4]), [1, 3, 6, 10]);
  test("P10 b", runningSum([1, 1, 1, 1, 1]), [1, 2, 3, 4, 5]);
  test("P11 a", maximumWealth([[1, 2, 3], [3, 2, 1]]), 6);
  test("P11 b", maximumWealth([[1, 5], [7, 3], [3, 5]]), 10);
  { const a = [1, 1, 2]; const k = removeDuplicates(a); test("P12 a", [k, a.slice(0, k)], [2, [1, 2]]); }
  { const a = [0,0,1,1,1,2,2,3,3,4]; const k = removeDuplicates(a); test("P12 b", [k, a.slice(0, k)], [5, [0,1,2,3,4]]); }
  test("P13 a", containsDuplicate([1, 2, 3, 1]), true);
  test("P13 b", containsDuplicate([1, 2, 3, 4]), false);
  test("P13 c", containsDuplicate([1,1,1,3,3,4,3,2,4,2]), true);
  test("P14 a", inPlace(moveZeroes, [0, 1, 0, 3, 12]), [1, 3, 12, 0, 0]);
  test("P14 b", inPlace(moveZeroes, [0, 0, 1]), [1, 0, 0]);
  test("P14 c", inPlace(moveZeroes, [1, 2, 3]), [1, 2, 3]);
  test("P15 a", inPlace(merge, [1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3), [1, 2, 2, 3, 5, 6]);
  test("P15 b", inPlace(merge, [1], 1, [], 0), [1]);
  test("P15 c", inPlace(merge, [0], 0, [1], 1), [1]);
  test("P16 a", threeSum([-1, 0, 1, 2, -1, -4]), [[-1, -1, 2], [-1, 0, 1]]);
  test("P16 b", threeSum([0, 1, 1]), []);
  test("P16 c", threeSum([0, 0, 0]), [[0, 0, 0]]);
  test("P17 a", plusOne([1, 2, 9]), [1, 3, 0]);
  test("P17 b", plusOne([4, 3, 2, 1]), [4, 3, 2, 2]);
  test("P17 c", plusOne([9, 9, 9]), [1, 0, 0, 0]);
  test("P18 a", inPlace(reverseString, ["h","e","l","l","o"]), ["o","l","l","e","h"]);
  test("P18 b", inPlace(reverseString, ["H","a","n","n","a","h"]), ["h","a","n","n","a","H"]);
  test("P19 a", lengthOfLastWord("Hello World"), 5);
  test("P19 b", lengthOfLastWord("   fly me   to   the moon  "), 4);
  test("P19 c", lengthOfLastWord("luffy is still joyboy"), 6);
  test("P20 a", longestCommonPrefix(["flower", "flow", "flight"]), "fl");
  test("P20 b", longestCommonPrefix(["dog", "racecar", "car"]), "");
  // Note: the problem sheet says "inter", but all three words actually share "inters" (i-n-t-e-r-s).
  test("P20 c", longestCommonPrefix(["interspecies", "interstellar", "interstate"]), "inters");
  test("P20 d", longestCommonPrefix(["alone"]), "alone");
  test("P20 e", longestCommonPrefix(["abc", ""]), "");

  console.log(`\n${passed} passed, ${failed} failed`);
}
