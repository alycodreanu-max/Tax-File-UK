import { describe, expect, it } from "vitest";

describe("SaaS scaffold", () => {
  it("keeps production HMRC filing disabled by default", () => {
    expect(process.env.HMRC_PRODUCTION_ENABLED).not.toBe("true");
  });
});
