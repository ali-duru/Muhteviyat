import mongoose, { Schema } from 'mongoose';

const topicSchema = new Schema(
	{
		name: String,
		about: String,
		vision: String,
		mission: String,
	},
	{
		timestamps: true,
	}
);

const Topic = mongoose.models.Topic || mongoose.model('Topic', topicSchema);

export default Topic;
