use tauri::command;

/// Simple greeting command to test Tauri IPC
/// This demonstrates the basic pattern for Tauri commands
#[command]
pub fn greet(name: String) -> String {
    format!("Hello, {}! Welcome to Stack Manager.", name)
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_greet() {
        let result = greet("World".to_string());
        assert_eq!(result, "Hello, World! Welcome to Stack Manager.");
    }
}
