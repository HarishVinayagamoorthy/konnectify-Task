# Traffic Light and Coin Change Tasks

## Traffic Light Task (Task 1)

This is a simple implementation of a traffic light system using React. The traffic light changes between three colors (red, yellow, and green) with specified durations for each light. The React `useState` and `useEffect` hooks are used to manage the state and timing of the light changes.

- **Red Light**: 15 seconds
- **Green Light**: 10 seconds
- **Yellow Light**: 3 seconds

The light changes automatically based on the timer using a loop and `setTimeout` to switch between the states.

---

## Coin Change Task (Task 2)

This function (`minCoinsWeNeed`) solves the problem of finding the minimum number of coins required to reach a target value, given a set of coin denominations. The algorithm sorts the coin denominations in descending order and iteratively subtracts the largest possible coin from the target until the target is reached or becomes impossible.

**Input**: An array of coin denominations and a target value.

**Output**: The minimum coins needed to reach the target, or a message indicating that it's not possible with the given denominations.

Example:
```javascript
const input = [1, 2, 3, 4, 10];
const target = 92;
console.log(minCoinsWeNeed(input, target));


Note: Task 2 can be found in the "task" branch.
