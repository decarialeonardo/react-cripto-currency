import { Switch } from "@material-ui/core";

export function numberToMillions(value) {

    // Twelve Zeroes for Trillons
    return Math.abs(Number(value)) >= 1.0e+12

    ? (Math.abs(Number(value)) / 1.0e+12).toFixed(2) + "t"
    
    // Nine Zeroes for Billions
    : Math.abs(Number(value)) >= 1.0e+9

    ? (Math.abs(Number(value)) / 1.0e+9).toFixed(2) + "b"
    
    // Six Zeroes for Millions 
    : Math.abs(Number(value)) >= 1.0e+6

    ? (Math.abs(Number(value)) / 1.0e+6).toFixed(2) + "m"

    // Three Zeroes for Thousands
    : Math.abs(Number(value)) >= 1.0e+3

    ? (Math.abs(Number(value)) / 1.0e+3).toFixed(2) + "k"

    : Math.abs(Number(value));
  }