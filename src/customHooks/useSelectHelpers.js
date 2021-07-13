/* eslint-disable eqeqeq */
export const useSelectHelpers = () => {
  const formatAsOptGroup = (data) => {
    if (!data || !Array.isArray(data)) return null;
    return data.map((item) => {
      return {
        label: item.name,
        options: item?.skills.map((skill) => {
          return { name: skill.name, id: skill.id };
        }),
      };
    });
  };

  const extractId = (data) => {
    if (!data || !Array.isArray(data)) return null;
    return data.map((item) => item.id);
  };
  const extractOption = (id, data) => {
    if (!id || !data || !Array.isArray(data)) return null;
    return data.find((item) => id == item.id);
  };
  const extractOptionName = (id, data) => {
    if (!id || !data || !Array.isArray(data)) return null;
    return extractOption(id, data)?.name;
  };
  const extractOptionId = (id, data) => {
    if (!id || !data || !Array.isArray(data)) return null;
    return extractOption(id, data)?.id;
  };

  return {
    formatAsOptGroup,
    extractId,
    extractOptionName,
    extractOptionId,
    extractOption,
  };
};
