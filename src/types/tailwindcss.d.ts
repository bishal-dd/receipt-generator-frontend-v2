declare module 'tailwindcss/lib/util/flattenColorPalette' {
  const flattenColorPalette: (
    colors: Record<string, any>
  ) => Record<string, any>;
  export default flattenColorPalette;
}
