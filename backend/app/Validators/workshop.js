'use strict';

class workshop {
  get rules() {
    return {
      title: 'required',
      description: 'required',
      section: 'required | in:1,2,3',
      user_id: 'required | exists:users, id',
    };
  }
}

module.exports = workshop;
