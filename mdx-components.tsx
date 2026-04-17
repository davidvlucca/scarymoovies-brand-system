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
import { AtmosphericImage } from "@/components/brand/atmospheric-image";
import { MoviePosterCard, MoviePosterGrid } from "@/components/brand/movie-poster-card";
import { PullQuote, HorrorCallout } from "@/components/brand/pull-quote";
import { ButtonShowcase, PYFButton } from "@/components/brand/button-showcase";
import {
  FormShowcase,
  BrandInput,
  BrandCheckbox,
  BrandSwitch,
  BrandBadge,
  BrandRadioGroup,
  BrandSelect,
  BrandTextarea,
  BrandLabel,
} from "@/components/brand/form-showcase";
import { Navbar, NavbarShowcase } from "@/components/brand/navbar";
import { RatingChip, RatingChipShowcase } from "@/components/brand/rating-chip";
import { TagChip, TagChipShowcase } from "@/components/brand/tag-chip";
import { UserAvatar, UserAvatarShowcase } from "@/components/brand/user-avatar";
import { Skeleton, SkeletonPoster, SkeletonCard, SkeletonTextBlock, SkeletonShowcase } from "@/components/brand/skeleton-loader";
import { ToastShowcase } from "@/components/brand/toast-showcase";
import { ThreeStateButton, ThreeStateShowcase } from "@/components/brand/three-state-button";
import { StarRating, TierSelector, StarRatingShowcase } from "@/components/brand/star-rating";

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
    AtmosphericImage,
    MoviePosterCard,
    MoviePosterGrid,
    PullQuote,
    HorrorCallout,
    ButtonShowcase,
    PYFButton,
    FormShowcase,
    BrandInput,
    BrandCheckbox,
    BrandSwitch,
    BrandBadge,
    BrandRadioGroup,
    BrandSelect,
    BrandTextarea,
    BrandLabel,
    Navbar,
    NavbarShowcase,
    RatingChip,
    RatingChipShowcase,
    TagChip,
    TagChipShowcase,
    UserAvatar,
    UserAvatarShowcase,
    Skeleton,
    SkeletonPoster,
    SkeletonCard,
    SkeletonTextBlock,
    SkeletonShowcase,
    ToastShowcase,
    ThreeStateButton,
    ThreeStateShowcase,
    StarRating,
    TierSelector,
    StarRatingShowcase,
  };
}
