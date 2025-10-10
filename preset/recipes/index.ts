import { badgeRecipe } from "@/registry/default/recipes/badge";
import { buttonRecipe } from "@/registry/default/recipes/button";
import { inputRecipe } from "@/registry/default/recipes/input";
import { labelRecipe } from "@/registry/default/recipes/label";
import { scrollRecipe } from "@/registry/default/recipes/scroll";
import { separatorRecipe } from "@/registry/default/recipes/separator";
import { skeletonRecipe } from "@/registry/default/recipes/skeleton";
import { spinnerRecipe } from "@/registry/default/recipes/spinner";
import { textareaRecipe } from "@/registry/default/recipes/textarea";
import { toggleRecipe } from "@/registry/default/recipes/toggle";

export const recipes = {
  button: buttonRecipe,
  badge: badgeRecipe,
  input: inputRecipe,
  label: labelRecipe,
  scroll: scrollRecipe,
  separator: separatorRecipe,
  skeleton: skeletonRecipe,
  spinner: spinnerRecipe,
  textarea: textareaRecipe,
  toggle: toggleRecipe,
};
