const mongooes = require('mongoose');

const taskSchema = new mongooes.Schema({

    title: { type: String, required: true, trim: true, },
    
    description: { type: String, trim: true, },
      
    status: {
        type: String,

        enum: ['pending', 'in-progress', 'completed'],

        default: 'pending',
    },
    
      dueDate: { type: Date, },
      
      createdAt: { type: Date, default: Date.now, },
      
      updatedAt: {type: Date, default: Date.now, }
});
    
module.exports = mongooes.model('task', taskSchema);