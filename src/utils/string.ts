export const capitalizeFirstLetter = (name: string): string =>
  name ? name.charAt(0).toUpperCase() + name.slice(1) : ''
