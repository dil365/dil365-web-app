import type { IconsTypes } from "../assets/flowbite-icons";

export type InputComponentTypeTypes = "button"
    | "checkbox"
    | "date"
    | "datetime-local"
    | "email"
    | "hidden"
    | "month"
    | "number"
    | "password"
    | "radio"
    | "range"
    | "reset"
    | "search"
    | "submit"
    | "tel"
    | "text"
    | "time"
    | "url"
    | "week";

export type InputAutoCompleteType = "on" | "off" |
    "name" | "honorific-prefix" | "given-name" | "additional-name" | "family-name" | "honorific-suffix" |
    "nickname" | "email" | "username" | "new-password" | "current-password" | "one-time-code" |
    "organization-title" | "organization" | "street-address" | "address-line1" | "address-line2" |
    "address-line3" | "address-level4" | "address-level3" | "address-level2" | "address-level1" |
    "country" | "country-name" | "postal-code" | "cc-name" | "cc-given-name" | "cc-additional-name" |
    "cc-family-name" | "cc-number" | "cc-exp" | "cc-exp-month" | "cc-exp-year" | "cc-csc" |
    "cc-type" | "transaction-currency" | "transaction-amount" | "language" | "bday" | "bday-day" |
    "bday-month" | "bday-year" | "sex" | "tel" | "tel-country-code" | "tel-national" |
    "tel-area-code" | "tel-local" | "tel-extension" | "impp" | "url" | "photo";

export type InputNameType = "username" | "password" | "email" |
    "firstname" | "lastname" | "address" | "city" | "state" |
    "zip" | "country" | "phone" | "birthdate" | "gender" |
    "credit-card-number" | "credit-card-expiration" | "credit-card-cvc" |
    "quantity" | "comment" | "search" | string;

export type InputButtonStyleType = 'main' | 'second' | 'danger';

export type InputFileAcceptType =
    // Image file types
    'image/*' | '.jpg' | '.jpeg' | '.png' | '.gif' | '.svg' | '.bmp' | '.webp' |

    // Video file types
    'video/*' | '.mp4' | '.mov' | '.wmv' | '.flv' | '.avi' | '.mkv' |

    // Audio file types
    'audio/*' | '.mp3' | '.wav' | '.aac' | '.ogg' | '.flac' |

    // Text and document file types
    'text/*' | '.txt' | '.csv' | '.pdf' | '.doc' | '.docx' |
    '.xls' | '.xlsx' | '.ppt' | '.pptx' | '.odt' | '.ods' | '.odp' |

    // Archive file types
    '.zip' | '.rar' | '.7z' | '.gz' | '.tar' |

    // Code and script file types
    '.html' | '.css' | '.js' | '.jsx' | '.ts' | '.tsx' | '.json' | '.xml';

export type InputMessageType = { type?: 'warning' | 'info' | 'error' | 'success', text: string } | null

export type InputComponentPropsType = {
    type: 'text' | 'password' | 'email' | 'number' | 'date';
    placeholder?: string;
    value?: string | number;
    name?: InputNameType;
    autocomplete?: InputAutoCompleteType;
    required?: boolean;
    readonly?: boolean;
    disabled?: boolean;
    label?: string;
    title?: string;
    pattern?: string;
    min?: string | number;
    max?: string | number;
    icon?: IconsTypes;
}