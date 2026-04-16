import type { MDXComponents } from "mdx/types";
import { ColorSwatch } from "@/components/brand/color-swatch";
import { ColorPalette } from "@/components/brand/color-palette";
import { LogoDisplay } from "@/components/brand/logo-display";
import { DosDonts } from "@/components/brand/dos-and-donts";
import { TypeSpecimen } from "@/components/brand/type-specimen";
import { ComponentDemo } from "@/components/brand/component-demo";
import { TierList } from "@/components/brand/tier-list";
import { InteractionDemo } from "@/components/brand/interaction-demo";
import { ScreenAnnotation } from "@/components/brand/screen-annotation";
import { SemanticTokens } from "@/components/brand/semantic-tokens";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    ColorSwatch,
    ColorPalette,
    LogoDisplay,
    DosDonts,
    TypeSpecimen,
    ComponentDemo,
    TierList,
    InteractionDemo,
    ScreenAnnotation,
    SemanticTokens,
  };
}
