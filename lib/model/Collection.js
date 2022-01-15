'use strict';

class Collection {
  constructor(model) {
    this.model = model;
  }

  async read(id, association) {
    // let records = null;
    // let { id } = req.params;
    let options = {};
    if (association) {
      options.include = association;
    }
    let records;
    if (id) {
      options['where'] = {id};
      records = await this.model.findOne(options);
      // res.status(200).json(records);
    } else {
      records = await this.model.findAll();
      // res.status(200).json(records);
    }
    return records;
  }

  async create(data) {
    // let records = req.body;
    let record = await this.model.create(data);
    // res.status(200).json(record);
    return record;
  }

  async update(id, records) {
    // let { id } = req.params;
    // const records = req.body;
    let record = await this.model.findOne({ where: { id } });
    let updatedRecord = await record.update(records);
    // res.status(200).json(updatedRecord);
    return updatedRecord;
  }

  async destroy(id) {
    // let { id } = req.params;
    let deletedRecord = await this.model.destroy({ where: { id } });
    // res.status(200).json(deletedRecord);
    return deletedRecord;
  }
}

module.exports = Collection;
