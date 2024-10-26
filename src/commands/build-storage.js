const buildStorage = (user, args) => {
  return `<@${user.id}>'s crafted a fine storage chest! Ye can stash up to 1,000 bits o' plundered resources.`;
};

module.exports = buildStorage;
