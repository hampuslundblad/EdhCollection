import { mount } from "@vue/test-utils";
import CardCollectionTable from "@/components/CardCollectionTable.vue";

describe("CardCollectionTable.vue", () => {
  it("contains 0 cards", () => {
    const wrapper = mount(CardCollectionTable);
    expect(wrapper.findAll('[data-test="cardTable"]')).toHaveLength(0);
  });
});
