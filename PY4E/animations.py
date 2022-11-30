#Roll Dynamic.py
"""Dynamically graphing frequencies of die rolls."""


from matplotlib.pyplot import figure


def update(frame_number,rolls, faces, frequencies):
 """Configures bar plot contents for each animation frame."""
 #roll die and updated frequencies
for i in range(rolls):
    frequencies[random.radrange(1,7) - 1] += 1
     plt.cla() # clear old contents contents of current figure
     axes = sns.barplot(faces, frequencies, palette='bright')
     axes.set_title(f'Die Frequencies for {sum(frequencies):,} Rolls')
     axes.set_ylim(top=max(frequencies) * 1.10) # scale y-axis by 10%
     #display frequency and percentage above each patch (bar)
    for bar, frequency in zip(axes.patches, frequencies):
     text_x = bar.get_x() + bar.get_width() / 2.0
    text_y = bar.get_height()
    text = f'{frequency:,}/n{frequency / sum(frequencies):.3%}'
    axes.text(text_x, text_y, text, ha = 'center", va = 'bottom')
     # read command-line arguments for number of frames and rolls per frame
     number_of_frames = int(sys.argv[1])
     rolls_per_frame = int(sys.argv[2])
     sns.set_style('Whitegrid') # white background with gray grid lines
     figure = plt.figure('Rolling a Six-Sided Die") # figure for animation
     values = list(range(1,7)) # die faces for display on x-axis
     frequencies = [0] * 6 # six-element list of die frequencies
     #configure and start animation that call function update
     die_animation = animation.FuncAnimation(
         figure, update, repeat=False, frames=number_of_frames, interval =33,
         fargs=(rolls_per_frame,values, frequencies))
         
 