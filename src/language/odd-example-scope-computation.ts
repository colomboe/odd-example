import {
    AstNode,
    AstNodeDescription,
    DefaultScopeComputation,
    LangiumDocument,
    MultiMap,
    PrecomputedScopes
} from "langium";
import {Model} from "../language/generated/ast.js";

export class OddExampleScopeComputation extends DefaultScopeComputation {

    override async computeLocalScopes(document: LangiumDocument): Promise<PrecomputedScopes> {
        const model = document.parseResult.value as Model;
        const scopes = new MultiMap<AstNode, AstNodeDescription>();
        this.processContainer(model, scopes, document);
        return scopes;
    }

    private processContainer(
        container: Model,
        scopes: PrecomputedScopes,
        document: LangiumDocument
    ) {
        container.device.forEach(device => {
            const featureDescriptors = device.deviceType.ref?.features.map(f => this.descriptions.createDescription(f, undefined)) ?? [];
            scopes.addAll(device, featureDescriptors);
        });
    }

}
