'use strict';

class Collection {
  constructor(model) {
    this.model = model;
  }

  async read(id, association) {
    
    let options = {};
    if (association) {
      options.include = association;
    }
    let records;
    if (id) {
      options['where'] = {id};
      records = await this.model.findOne(options);
  
    } else {
      records = await this.model.findAll();
      
    }
    return records;
  }

  async create(data) {

    let record = await this.model.create(data);
    
    return record;
  }

  async update(id, records) {
    
    let record = await this.model.findOne({ where: { id } });
    let updatedRecord = await record.update(records);
    
    return updatedRecord;
  }

  async destroy(id) {
   
    let deletedRecord = await this.model.destroy({ where: { id } });
    
    return deletedRecord;
  }
}

module.exports = Collection;
