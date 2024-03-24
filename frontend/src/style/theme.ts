export type ColorKey = 'primary' | 'background' | 'secondary' | 'third' | 'border' | 'text';

interface Theme {
  color: Record<ColorKey, string>;
}
