import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
// import { injectServices } from '@/src/services'
// import { stubHoneyBuilder } from '@/src/services/builders'
// import { getStubHoneysAPI } from '@/src/services/helpers'

import Page from "./page";

test("Page", async () => {
  // injectServices("honeyAPI", getStubHoneysAPI([stubHoneyBuilder().title("toto").build()]))
  const Result = await Page();

  render(Result);

  expect(screen.getByText("toto")).toBeDefined();
});
