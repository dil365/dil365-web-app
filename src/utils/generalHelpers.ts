//  Creates a random string of a specified length (defaulting to 5) using uppercase letters,
//  lowercase letters, and numbers.
export function generateUniqueId(length = 5) {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

// Converts a string to kebab-case, making all characters lowercase and replacing spaces
// and non-alphanumeric characters with hyphens.
export function toKebabCase(str: string) {
  return str
    .replace(/\s+/g, "-")
    .toLowerCase()
    .replace(/[^a-z0-9-]/g, "");
}

// Transforms a snake_case string to camelCase by lowercasing the first segment and capitalizing
// the initial letter of subsequent segments.
export function toCamelCase(str: string) {
  return str
    .split("_")
    .map((part, index) =>
      index === 0
        ? part.toLowerCase()
        : part.charAt(0).toUpperCase() + part.slice(1).toLowerCase()
    )
    .join("");
}

// Converts a snake_case string to PascalCase by capitalizing the first letter of each segment
// and joining them without separators.
export function toPascalCase(str: string) {
  return str
    .split("_")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1).toLowerCase())
    .join("");
}

// Similar to toPascalCase, but it maintains the original casing of all characters after
// the first in each segment.
export function modifiedPascalCase(str: string) {
  return str
    .split("_")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join("");
}

// convert a string by splitting the string on underscores, capitalizing the first
// letter of each word, and then joining them back together with a space.
export function toTitleCase(str: string) {
  if (str) {
    return str
      .toLowerCase()
      .split("_")
      .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
      .join(" ");
  }
  return str;
}

// Converts an HTML string into a DOM element using DOMParser.
export function stringToElement(str: string) {
  const parser = new DOMParser();
  const doc = parser.parseFromString(str, "text/html");
  return doc.body.firstChild as HTMLElement;
}

// Creates a deep copy of an object or array using JSON serialization and deserialization.
export function deepCopy(model) {
  if (model) {
    return JSON.parse(JSON.stringify(model));
  }
  return model;
}

// Helper function that extracts the initials of a full name
export function extractInitials(fullName = "") {
  if (!fullName || typeof fullName !== "string") {
    return "";
  }

  // Trim the full name and split into an array of words
  const nameParts = fullName.trim().split(/\s+/);

  if (nameParts.length === 0) {
    return ""; // Return an empty string if there are no parts found
  }

  // Get the first letter of the first name
  const firstInitial = nameParts[0][0].toUpperCase();

  // Get the last letter of the last name (only if there's more than one name part)
  const lastInitial =
    nameParts.length > 1
      ? nameParts[nameParts.length - 1][0].toUpperCase()
      : "";

  // Combine the initials
  return firstInitial + lastInitial;
}

export function capitalizeFirstLetter(string: string) {
  if (string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  return string;
}


export function scrollToTarget(targetId: string) {
  const targetElement = document.getElementById(targetId);
  if (targetElement) {
    targetElement.scrollIntoView({ behavior: "smooth" });
  } else {
    console.error("Element with ID " + targetId + " not found.");
  }
}

export function copyToClipboard(value: string) {
  // Create a temporary textarea element
  const textarea = document.createElement("textarea");
  textarea.value = value;

  // Make it invisible
  textarea.style.position = "fixed";
  textarea.style.opacity = "0";

  // Append to body
  document.body.appendChild(textarea);

  // Select and copy
  textarea.select();
  try {
    document.execCommand("copy");
    console.log("Value copied to clipboard");
  } catch (err) {
    console.error("Failed to copy: ", err);
  }

  // Clean up
  document.body.removeChild(textarea);
}

export const replaceEscapeSequences = (str: string) => {
  // Replace the escape sequences with HTML tags
  if (str) {
    return str
      .replace(/\n/g, "<br>") // Replace newline (\n) with <br>
      .replace(/\t/g, "&nbsp;&nbsp;&nbsp;&nbsp;") // Replace tab (\t) with 4 non-breaking spaces
      .replace(/\\/g, "&bsol;") // Replace backslash (\\) with &bsol; (for a backslash)
      .replace(/\'/g, "&apos;") // Replace single quote (') with &apos;
      .replace(/\"/g, "&quot;"); // Replace double quote (") with &quot;
  }
  return str;
};