/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  EventFragment,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedLogDescription,
  TypedListener,
  TypedContractMethod,
} from "./common";

export declare namespace ProposalStorage {
  export type ProposalStruct = { title: string; description: string };

  export type ProposalStructOutput = [title: string, description: string] & {
    title: string;
    description: string;
  };
}

export interface PROPOSALSInterface extends Interface {
  getFunction(
    nameOrSignature: "createProposal" | "getAllProposals" | "proposals"
  ): FunctionFragment;

  getEvent(nameOrSignatureOrTopic: "ProposalCreated"): EventFragment;

  encodeFunctionData(
    functionFragment: "createProposal",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "getAllProposals",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "proposals",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "createProposal",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getAllProposals",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "proposals", data: BytesLike): Result;
}

export namespace ProposalCreatedEvent {
  export type InputTuple = [
    title: string,
    description: string,
    creator: AddressLike
  ];
  export type OutputTuple = [
    title: string,
    description: string,
    creator: string
  ];
  export interface OutputObject {
    title: string;
    description: string;
    creator: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface PROPOSALS extends BaseContract {
  connect(runner?: ContractRunner | null): PROPOSALS;
  waitForDeployment(): Promise<this>;

  interface: PROPOSALSInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  createProposal: TypedContractMethod<
    [_title: string, _description: string],
    [boolean],
    "nonpayable"
  >;

  getAllProposals: TypedContractMethod<
    [],
    [ProposalStorage.ProposalStructOutput[]],
    "view"
  >;

  proposals: TypedContractMethod<
    [arg0: BigNumberish],
    [[string, string] & { title: string; description: string }],
    "view"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "createProposal"
  ): TypedContractMethod<
    [_title: string, _description: string],
    [boolean],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "getAllProposals"
  ): TypedContractMethod<[], [ProposalStorage.ProposalStructOutput[]], "view">;
  getFunction(
    nameOrSignature: "proposals"
  ): TypedContractMethod<
    [arg0: BigNumberish],
    [[string, string] & { title: string; description: string }],
    "view"
  >;

  getEvent(
    key: "ProposalCreated"
  ): TypedContractEvent<
    ProposalCreatedEvent.InputTuple,
    ProposalCreatedEvent.OutputTuple,
    ProposalCreatedEvent.OutputObject
  >;

  filters: {
    "ProposalCreated(string,string,address)": TypedContractEvent<
      ProposalCreatedEvent.InputTuple,
      ProposalCreatedEvent.OutputTuple,
      ProposalCreatedEvent.OutputObject
    >;
    ProposalCreated: TypedContractEvent<
      ProposalCreatedEvent.InputTuple,
      ProposalCreatedEvent.OutputTuple,
      ProposalCreatedEvent.OutputObject
    >;
  };
}
