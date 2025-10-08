import { badgeRecipe } from "@/registry/default/recipes/badge";
import { buttonRecipe } from "@/registry/default/recipes/button";
import { inputRecipe } from "@/registry/default/recipes/input";
import { kbdRecipe } from "@/registry/default/recipes/kbd";
import { kbdGroupRecipe } from "@/registry/default/recipes/kbd-group";
import { labelRecipe } from "@/registry/default/recipes/label";
import { scrollRecipe } from "@/registry/default/recipes/scroll";
import { separatorRecipe } from "@/registry/default/recipes/separator";
import { skeletonRecipe } from "@/registry/default/recipes/skeleton";
import { textareaRecipe } from "@/registry/default/recipes/textarea";
import { toggleRecipe } from "@/registry/default/recipes/toggle";

export const recipes = {
  button: buttonRecipe,
  badge: badgeRecipe,
  input: inputRecipe,
  kbd: kbdRecipe,
  kbdGroup: kbdGroupRecipe,
  label: labelRecipe,
  scroll: scrollRecipe,
  separator: separatorRecipe,
  skeleton: skeletonRecipe,
  textarea: textareaRecipe,
  toggle: toggleRecipe,
};
