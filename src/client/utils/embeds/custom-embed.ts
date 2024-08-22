import { ColorResolvable, EmbedBuilder, APIEmbedField, APIEmbedAuthor } from 'discord.js';

export class CustomEmbed extends EmbedBuilder {
  constructor(title: string, description: string, color: ColorResolvable | 0x00FFFF = 0x00FFFF, fields: APIEmbedField[] | null = null, author: { displayName: string, avatarURL: () => string } | undefined = undefined) {
    super({
      title,
      description,
      timestamp: Date.now(),
      fields: fields || [],
      author: author && { name: author.displayName, iconURL: author.avatarURL() },
      footer: { text: 'Made by Julexar' }
    });

    this.setColor(color);
  }
}