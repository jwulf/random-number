import * as core from '@actions/core'

async function run(): Promise<void> {
  try {
    const max = core.getInput('max') || '10'
    core.setOutput(
      'number',
      (Math.round(Math.random() * parseInt(max, 10)) + 1).toString()
    )
  } catch (error) {
    core.setFailed(error.message)
  }
}

run()
