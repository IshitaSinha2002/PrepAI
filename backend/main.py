from roadmap import generate_roadmap

role = input("Enter Role: ")
experience_level = input("Enter Experience Level: ")
tech_stack = input("Enter Tech Stack: ")

print("\nGenerating Interview Roadmap...\n")

roadmap = generate_roadmap(
    role,
    experience_level,
    tech_stack
)

print(roadmap)