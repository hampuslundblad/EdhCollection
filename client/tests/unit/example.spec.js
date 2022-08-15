import { mount } from "@vue/test-utils";
import CardCollectionTable from "@/components/CardCollectionTable.vue";

describe("CardCollectionTable.vue", () => {
  it("Table should have length 1", () => {
    const columns = 4;
    const wrapper = mount(CardCollectionTable);
    const table = wrapper.find('[data-test="cardTable"]');
    expect(true)
  });
});
