# Autonoma Integration Checklist

## Entities (from entity audit)
- [ ] User factory
- [ ] Conversation factory
- [ ] Message factory

## Integration
- [ ] `/api/autonoma` endpoint (discover / up / down)
- [ ] Teardown (scoped by user cascade)
- [ ] Auth callback (JWT + credentials)
- [ ] Maintenance note in AGENTS.md

## Recipe & validation
- [ ] Full recipe at `~/.autonoma/vera-worldwide/recipe.json`
- [ ] Per-entity up/down validated against PostgreSQL
- [ ] Full-recipe up/down pass
- [ ] Wrong signature rejected
- [ ] Auth payload contains real credentials
- [ ] `sdk check` passes on recipe.json
- [ ] Concurrent-instances proof (`--repeat 3`)

## Ship
- [ ] Commit on `autonoma-integration`
- [ ] Push branch
- [ ] Open pull request
