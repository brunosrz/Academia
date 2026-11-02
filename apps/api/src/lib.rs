use worker::*;

#[event(fetch)]
async fn fetch(req: Request, _env: Env, _ctx: Context) -> Result<Response> {
    match (req.method(), req.path().as_str()) {
        (Method::Get, "/health") => Response::from_json(&serde_health()),
        _ => Response::error("Não encontrado", 404),
    }
}

fn serde_health() -> std::collections::BTreeMap<&'static str, &'static str> {
    [("app", "academia-api"), ("status", "ok")].into_iter().collect()
}

#[cfg(test)]
mod tests {
    #[test]
    fn health_identifies_api() {
        assert_eq!(super::serde_health().get("status"), Some(&"ok"));
    }
}
