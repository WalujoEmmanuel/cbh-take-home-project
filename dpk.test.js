const { deterministicPartitionKey } = require("./dpk");

describe("deterministicPartitionKey", () => {
  it("Returns the value '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });

  it("Returns the value '0' when given input 0", () => {
    const trivialKey = deterministicPartitionKey(0);
    expect(trivialKey).toBe("0");
  });

  it("Should not return the value '0' when given input greater than 0", () => {
    const trivialKey = deterministicPartitionKey(236);
    expect(trivialKey).not.toBe("0");
  });

  it("Returns the stringified value of 245 integer passed as event partitionKey", () => {
    const number = 256;
    const stringifiedNumber = JSON.stringify(number);
    const trivialKey = deterministicPartitionKey({
      partitionKey: number
    });
    expect(trivialKey).toEqual(stringifiedNumber);
  });

  it("Returns the exact string value of length less than 256 passed as event partitionKey", () => {
    const stringValue = "H9AT1A9MryupDOxolQA";
    const trivialKey = deterministicPartitionKey({
      partitionKey: stringValue
    });
    expect(trivialKey).toEqual(stringValue);
  });

  it("Should not return the exact string value of length greater than 256 passed as event partitionKey", () => {
    const stringValue = "H9AT1A9MryupDOxolQA7DaJIuSwXtRc9fSklVSO38qjWn3Ra8GS4KNuvSyJXKnFrsOXtzzhIdXtb9Wh6w3L3ekXp0GuNlX7x52vnTQzmE9f7kL1NHaGfaP5hAIyTB9fB8E3IgblF1i9Y1c3TGQu7KjzH8N2i3RAwahzuUcqI4CwY9vESCgMEnxrz15PoG9O7nLHKxPki54jby4YiPzCnYZfVzyBvSD7n1xfQEw71WmvTaObAQBwqXuOKBGLpE3Dor9Qm";
    const trivialKey = deterministicPartitionKey({
      partitionKey: stringValue
    });
    expect(trivialKey).not.toEqual(stringValue);
  });
});
